import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

    public static CONFIRMED = 'confirmed';
    public static CANCELED = 'canceled';


    constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
        /** Setting for default value */
        this.data = {
            button: this.data.button ? {
                cancel: this.data.button.cancel,
                confirm: this.data.button.confirm,
            } : {
                confirm: '',
                cancel: ''
            },
            content: this.data.content ? this.data.content : '',
            showIcon: this.data.button ? this.data.showIcon : false,
            title: this.data.title ? this.data.title : '',
        };
    }

    confirmed(): void {
        this.dialogRef.close('confirmed');
    }

    canceled(): void {
        this.dialogRef.close('canceled');
    }

    ngOnInit() {
    }
}

