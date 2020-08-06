import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-template-plain-text-component',
  templateUrl: './template-plain-text.component.html',
  styleUrls: ['./template-plain-text.component.scss'],
  inputs: ['payload','isHistoryView', 'isViewMode', 'isLike', 'isUnlike']
})

export class TemplatePlainTextComponent implements OnInit {
  public payload;
  public isHistoryView: boolean;
  public isViewMode: boolean;
  public isLike: boolean;
  public isUnlike: boolean;

  @Output() onUpdateHandler = new EventEmitter();

  constructor(
  ) { }

  ngOnInit() {
  }

  updateText(newText) {
    this.onUpdateHandler.emit(newText);
  }

}
