import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-disclaimer-dialog',
  templateUrl: './disclaimer-dialog.component.html',
  styleUrls: ['./disclaimer-dialog.component.scss']
})
export class DisclaimerDialogComponent implements OnInit {

   private  BUTTON_AGREE = 'Agree';
  constructor(
    public dialogRef: MatDialogRef<DisclaimerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.data = {
      disclaimer: {
        title: data.title,
        content: data.content
      }
    };
  }

  ngOnInit() {
  }

  onAgree() {
    this.dialogRef.close(this.BUTTON_AGREE);
  }
}
