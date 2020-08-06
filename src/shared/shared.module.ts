import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from './material.module';
import { ClickOutsideModule } from 'ng-click-outside';

import {StratosNgLoadingModule} from '@uxui/stratos-ng-loading';
import {StratosNgInputTextModule} from '@uxui/stratos-ng-input-text';
import {StratosNgDatepickerModule} from '@uxui/stratos-ng-datepicker';
import {StratosNgFilterModule} from '@uxui/stratos-ng-filter';
import {StratosNgRadioModule} from '@uxui/stratos-ng-radio';
import {StratosNgButtonModule} from '@uxui/stratos-ng-button';
import {StratosNgDropdownListModule} from '@uxui/stratos-ng-dropdown-list';
import {StratosNgTextareaModule} from '@uxui/stratos-ng-textarea';
import {StratosNgAccordionModule} from '@uxui/stratos-ng-accordion';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import {WarningDialogComponent} from '@s-components/warning-dialogs/warning-dialog.component';
import {PopupUtil} from '@s-utils/popup.util';
import {ConfirmationDialogComponent} from '@s-components/confirmation-dialog/confirmation-dialog.component';
import {LoadingComponent} from '@s-components/loadings/loading.component';
import {DatepickerComponent} from '@s-components/datepicker/datepicker.component';
import {FilterComponent} from '@s-components/filter/filter.component';
import {DisclaimerDialogComponent} from '@s-components/disclaimer-dialog/disclaimer-dialog.component';
import {ErrorService} from '@shared/services/error.service';
import {SharedService} from '@shared/services/shared.service';
import {HttpUtil} from '@s-utils/http.util';
import {StringShortenPipe} from '@s-pipes/string-shorten.pipe';
import {StringReplacePipe} from '@s-pipes/replace.pipe';
import {CapitalWordPipe} from '../app/pipes/capital-word.pipe';
import {SanitizeHtmlPipe} from '../app/pipes/sanitize-html.pipe';
import { OneTimeDirective } from './directives/one-time.directive';

/**
 * For declaring third-party modules
 */
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule, // Template driven module
        MaterialModule,
        NgxChartsModule,
        ReactiveFormsModule, // Reactive form approach
        StratosNgLoadingModule,
        StratosNgDatepickerModule,
        StratosNgInputTextModule,
        StratosNgFilterModule,
        StratosNgRadioModule,
        StratosNgButtonModule,
        StratosNgDropdownListModule,
        StratosNgTextareaModule,
        StratosNgAccordionModule,
        ClickOutsideModule
    ],
    declarations: [
        WarningDialogComponent,
        ConfirmationDialogComponent,
        LoadingComponent,
        DatepickerComponent,
        FilterComponent,
        DisclaimerDialogComponent,
        CapitalWordPipe,
        SanitizeHtmlPipe,
        StringShortenPipe,
        StringReplacePipe,
        OneTimeDirective
    ],
    providers: [
        HttpUtil,
        PopupUtil,
        ErrorService,
        SharedService
    ],
    entryComponents: [
        LoadingComponent,
        DatepickerComponent,
        WarningDialogComponent,
        DisclaimerDialogComponent,
        ConfirmationDialogComponent,
    ],
    exports: [
        MaterialModule,
        NgxChartsModule,
        FormsModule,
        ReactiveFormsModule,
        CapitalWordPipe,
        SanitizeHtmlPipe,
        StringShortenPipe,
        StringReplacePipe,
        DatepickerComponent,
        FilterComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule {
}
