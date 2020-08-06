import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export class FilterInput {
  id: string;
  label: string;
  value: string;
  checked: boolean;
}

@Component({
  host: {'class': 'w-100'},
  selector: 'filter-component',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  inputs: ['inputData']
})
export class FilterComponent implements OnInit {
  
  @Input('inputData')
  public inputData: Array<FilterInput>;
  
  @Output()
  emitChangeEvent = new EventEmitter();
  
  constructor() {
  
  }
  
  ngOnInit() {
  
  }
  
  resetInputData(inputData: Array<FilterInput>, checked: boolean) {
    inputData.forEach(e => {
      e.checked = checked;
    });
  }
  
  onChange(filterChange: any): void {
    const id = filterChange.source.id;
    const checked = filterChange.checked;
    
    const updateData = JSON.parse(JSON.stringify(this.inputData));
  
    // uncheck all items if previous all checked
    let checkedItems = updateData.filter(e => e.checked);
    let previousAllChecked = false;
    if(checkedItems.length === updateData.length) {
      previousAllChecked = true;
      this.resetInputData(updateData, false);
    }
  
    // update the status to input data
    const item = updateData.filter(e => ('filter_item_'+e.id)===id)[0];
    item.checked = previousAllChecked ? true : checked;
  
    // recheck all items when they are all unchecked
    checkedItems = updateData.filter(e => e.checked);
    if(checkedItems.length===0) {
      this.resetInputData(updateData, true);
    }
  
    this.inputData = updateData;
    console.log('updated filter: ', this.inputData);
    
    this.emitChangeEvent.emit(this.inputData);
  }
  
}
