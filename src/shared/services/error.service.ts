import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { PopupUtil } from '../utils/popup.util';
import { Location } from '@angular/common';

export interface PreviousPage {
  displayMsg: string;
  icon?: string;
  title?: string;
  previousPage?: string;
}

@Injectable()
export class ErrorService {

  constructor(private sharedService: SharedService,
    private popupUtil: PopupUtil,
    private _location: Location,
    private router: Router) {
  }

  redirectToError(error?) {
    const errorData = {
      type: error.type || null,
      title: error.title || null,
      content: error.content || 'System error! Please contact IT Department!',
    };
    sessionStorage.clear();
    //  clear all data except errorData
    this.sharedService.setSession('errorPage', errorData);
    this.sharedService.getPreLogin().next(true);
    this.router.navigateByUrl('error');
  }

  redirectToPreviousPage(config: PreviousPage) {

    this.popupUtil.openWarning({
      data: {
        button: { name: 'OK' },
        error: {
          message: config.displayMsg
        },
        icon: config.icon,
        title: config.title || '',
        showIcon: !!config.icon,
      }
    }).afterClosed().subscribe(() => {
      if (this._location.path() && !config.previousPage) {
        this._location.back();
        return;
      }
      this.router.navigateByUrl(config.previousPage || '/');
      return;
    });
  }
}
