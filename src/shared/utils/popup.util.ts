import {Injectable} from '@angular/core';
import {LoadingComponent} from '../components/loadings/loading.component';
import {WarningDialogComponent} from '../components/warning-dialogs/warning-dialog.component';
import {MatDialog, MatDialogConfig, MatSnackBar} from '@angular/material';
import {ConfirmationDialogComponent} from '../components/confirmation-dialog/confirmation-dialog.component';
import {DisclaimerDialogComponent} from '../components/disclaimer-dialog/disclaimer-dialog.component';
import {GLOBAL_CONSTANTS} from '../../constants/global-contant';
import {MatDialogRef} from '@angular/material/dialog/typings/dialog-ref';

@Injectable()
export class PopupUtil {
    activeIdMap: Map<string, string>;

    constructor(private dialog: MatDialog,
                private snackBar: MatSnackBar) {
        this.activeIdMap = new Map<string, string>();
    }

    openLoading(config?: MatDialogConfig) {

        if (this.activeIdMap && this.activeIdMap.get('loading')) {
            return;
        }

        //  default config
        let _config = {
            width: 'auto',
            height: 'auto',
            disableClose: true,
        };

        _config = (config) ? Object.assign(_config, config) : _config;
        const dialogRef = this.dialog.open(LoadingComponent, _config);
        this.activeIdMap.set('loading', dialogRef.id);
        return dialogRef;
    }

    closeLoading() {
        this.closeDialog(this.activeIdMap.get('loading'));
        this.activeIdMap.delete('loading');
    }

    openWarning(config?: MatDialogConfig) {

        const dialogRef = this.dialog.open(WarningDialogComponent, config);
        this.activeIdMap.set('warning', dialogRef.id);
        return dialogRef;
    }

    closeWarning() {
        this.closeDialog(this.activeIdMap.get('warning'));
    }

    openConfirmation(config: MatDialogConfig): MatDialogRef<ConfirmationDialogComponent> {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, config);
        this.activeIdMap.set('confirmation', dialogRef.id);
        return dialogRef;
    }

    closeConfirmation() {
        this.closeDialog(this.activeIdMap.get('confirmation'));
    }

    openDisclaimer(config: MatDialogConfig) {
        const dialogRef = this.dialog.open(DisclaimerDialogComponent, config);
        this.activeIdMap.set('disclaimer', dialogRef.id);
        return dialogRef;
    }

    closeDisclaimer() {
        this.closeDialog(this.activeIdMap.get('disclaimer'));
    }

    successSnackBar(message: string) {
        return this.snackBar.open(message, undefined, {
            duration: 5000,
            panelClass: GLOBAL_CONSTANTS.SUCCESS_COLOUR,
            verticalPosition: 'top'
        });
    }

    errorSnackBar(message: string) {
        return this.snackBar.open(message, undefined, {
            duration: 5000,
            panelClass: GLOBAL_CONSTANTS.FAILURE_COLOUR,
            verticalPosition: 'top'
        });
    }

    getDialogs() {
        return this.dialog;
    }

    getDialogById(id: string) {
        return this.dialog.getDialogById(id);
    }

    closeDialog(id: any) {

        if (this.dialog.getDialogById(id)) {

            this.dialog.getDialogById(id).close();
        }
    }
}
