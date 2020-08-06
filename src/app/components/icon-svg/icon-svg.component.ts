import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'icon-svg',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.scss']
})
export class IconSvgComponent implements OnInit {
@Input() iconId: string;
@Input() iconColor: string;
@Input() settledWidth: string;
@Input() settledHeight: string;
@Input() settledMargin: string;
  constructor() { }

  ngOnInit() {
  }

}
