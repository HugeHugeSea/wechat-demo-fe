import {AfterViewInit, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {LoadingData} from '@uxui/stratos-ng-loading';

@Component({
  host: { class: 'w-100' },
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoadingComponent implements OnInit, AfterViewInit, OnDestroy {
  public loadingStatus = true;
  public loadingData: LoadingData;

  constructor() {
  }

  public ngOnInit() {
    this.loadingData = {
      header: 'Loading content',
      screenReaderText: 'sc test',
    };
  }
  public ngAfterViewInit() {
  }

  public ngOnDestroy() {
  }
}
