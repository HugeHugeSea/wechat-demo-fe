import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
  OnChanges, SimpleChanges
} from '@angular/core';
import { DatepickerData } from '@uxui/stratos-ng-datepicker';
import { MessageData } from '@uxui/stratos-ng-message';

import * as moment from 'moment';

export class DatepickerInput {
  fromDate: moment.Moment;
  toDate: moment.Moment;
  minDate: moment.Moment;
  maxDate: moment.Moment;
  headMessage: string;
  checkboxLabel: string;
  dateFromLabel: string;
  dateToLabel: string;
  addDateLabel: string;
}

@Component({
  selector: 'datepicker-component',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  inputs: [
    'inputData'
  ],
})
export class DatepickerComponent implements OnInit, OnChanges, AfterViewInit {
  
  @Input('inputData')
  inputData: DatepickerInput;
  
  @Output()
  onDateChange = new EventEmitter();
  
  fromDate: moment.Moment;
  toDate: moment.Moment;
  fromDateValue: string;
  toDateValue: string;
  minDate: number;
  maxDate: number;
  showDatepicker = false;
  showMessage = false;
  datepickerMessage: MessageData;
  datepickerData: DatepickerData;
  datepickerHoveredDates: string;

  constructor(private cd: ChangeDetectorRef) {
  
  }
  
  initDataPicker(dataPickerInput: DatepickerInput) {
    console.log('datepicker inputData: ' + JSON.stringify(dataPickerInput));
    
    const now = moment();
    const today = moment(now.format('YYYY/MM/DD'));
    
    this.fromDate = dataPickerInput.fromDate ? dataPickerInput.fromDate : now;
    this.toDate = dataPickerInput.toDate ? dataPickerInput.toDate : now;
    this.fromDateValue = this.fromDate.format('D MMM YYYY');
    this.toDateValue = this.toDate.format('D MMM YYYY');
    this.minDate = dataPickerInput.minDate ? moment(dataPickerInput.minDate.format('YYYY/MM/DD')).diff(today, 'days') : -7;
    this.maxDate = dataPickerInput.maxDate ? moment(dataPickerInput.maxDate.format('YYYY/MM/DD')).diff(today, 'days') : 7;
    
    console.log('minDate: ' + this.minDate + ', maxDate: ' + this.maxDate);
    
    this.showMessage = dataPickerInput.headMessage && dataPickerInput.headMessage.length>0;
    if(this.showMessage){
      this.datepickerMessage = {
        contents: [
          { content: dataPickerInput.headMessage }
        ]
      };
    }
    
    this.datepickerData = {
      datepickerAriaLabel: '',
      header: '',
      departingOnTitle: dataPickerInput.dateFromLabel || 'Date From',
      returningOnTitle: dataPickerInput.dateToLabel || 'Date To',
      addDateLabel: dataPickerInput.addDateLabel || 'Add date',
      oneWayLabel: 'N/A',
      checkboxLabel: dataPickerInput.checkboxLabel
    };
  }

  ngOnInit() {
    this.initDataPicker(this.inputData);
  }
  
  submitDateChangeEvent() {
    if(this.fromDate && this.toDate) {
      this.showDatepicker = false;
      const _param = {
        fromDate: this.fromDate,
        toDate: this.toDate
      };
      
      this.onDateChange.emit(_param)
    }
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.inputData.isFirstChange()){
      this.initDataPicker(changes.inputData.currentValue);
      this.submitDateChangeEvent();
    }
  }
  
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
  
  onInputClick() {
    this.showDatepicker = true;
  }
  
  onClosed(closed: boolean) {
    this.showDatepicker = !closed;
  }
  
  onHoveredDates(hoveredDates: string) {
    this.datepickerHoveredDates = hoveredDates;
  }
  
  onOutputDatepickerDates(dates: any) {
    this.fromDate = dates[0];
    this.toDate = dates[1];
  
    this.submitDateChangeEvent();
  }
  
  onFlexibleDatesValueChanged($event: boolean) {
  
  }
	
	hideDatepicker(e: Event) {
		const exclude = e.target && e.target['protocol']==='javascript:';
  	if(this.showDatepicker && !exclude) {
      this.showDatepicker = false;
    }
	}
}
