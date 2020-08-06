import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.scss']
})
export class WarningDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WarningDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    /** Setting for default value */
    this.data = {
      button: this.data.button ? { name: this.data.button.name } : { name: 'OK' },
      error: this.data.error ? { message: this.data.error.message } : '',
      showIcon: this.data.button ? this.data.showIcon : false,
      title: this.data.title ? this.data.title : 'Internal Server Error',
    };
  }

  onOkay(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
