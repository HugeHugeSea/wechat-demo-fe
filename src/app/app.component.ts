import * as $ from 'jquery';

import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { LoggerService } from '@shared/services/logger.service';
import { SessionService } from './services/session.service';
import { PopupUtil } from '@s-utils/popup.util';
import { MatDatepickerInputEvent, MatDialog, MatSort, MatDialogConfig, MatTableDataSource, MatPaginator, MatAutocompleteSelectedEvent } from '@angular/material';
import { Page} from '@shared/model/page';
import {SessionExport} from './interfaces/cxbot-tmpl-interf';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'test-fe';

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  public page: Page = new Page();

  public displayedColumns = ['Date', 'Time', 'Open ID', 'User name'];
  public activeRow: any;
  public dataSource: MatTableDataSource<SessionExport>;
  public dialogs: any[];
  public leftPanelId = '#session-detail-left-panel';
  public rightPanelId = '#session-detail-right-panel';
  public activeRowOpenId: string;

  constructor(private logger: LoggerService,
              private sessionService: SessionService,
              private popupUtil: PopupUtil,
              ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.onPaginateChange(0);
    });
  }

  ngOnDestroy() {
  }

  onRowClicked(row) {
    setTimeout(() => {
      this.activeRow = row;
    }, 10);
    //this.popupUtil.openLoading();
    const success = (resp) => {
      this.dialogs = resp;
    };
    const _param = {
      openId: row.openId,
    };
    this.sessionService.getDialogByOpenId(_param).subscribe(success, this.error, () => {
      //this.popupUtil.closeLoading();
    });
    $(this.leftPanelId).addClass('is-open-right-panel');
    $(this.rightPanelId).addClass('is-open-right-panel');
    this.activeRowOpenId = row.openId;
  }

  onPaginateChange(pageIndex) {
    this.paginator.pageIndex = pageIndex;
    this.page.pageIndex = pageIndex;
    this.search();
  }

  search() {
    //this.popupUtil.openLoading();
    const success = (resp) => {
      const result = [];
      if (resp.docs.length > 0) {
        resp.docs.forEach(element => {
          result.push(element);
        });
      }
      console.log('user list', result);
      this.dataSource = new MatTableDataSource<any>(result);
      this.page.totalElements = resp.total;
    };
    const _param = this.generateParam();
    this.sessionService.getUserList(_param).subscribe(success, this.error, () => {
      //this.popupUtil.closeLoading();
    });
  }

  private generateParam() {
    const _param = {
      skip: (this.page.pageIndex) * (this.page.size),
      limit: this.page.size,
      sort: 'createdAt:desc',
    };
    return _param;
  }

  onClosePanel() {
    $(this.leftPanelId).removeClass('is-open-right-panel');
    $(this.rightPanelId).removeClass('is-open-right-panel');
  }

  private error = (err) => {
    if (err.error instanceof ArrayBuffer) {
      err.error = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(err.error)));
    }
    this.logger.warn(err);
    this.popupUtil.closeLoading();
    if (err.error) {
      this.popupUtil.errorSnackBar(err.error.message);
    }
  }

}
