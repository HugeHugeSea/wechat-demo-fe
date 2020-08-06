import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material';
import {TemplatePlainTextComponent} from './components/template-plain-text/template-plain-text.component';
import {IconSvgComponent} from './components/icon-svg/icon-svg.component';
import {EnvironmentService} from './services/environment.service';
import {SessionService} from './services/session.service';
import { SharedModule } from '@shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TemplatePlainTextComponent,
    IconSvgComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    SharedModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    EnvironmentService,
    SessionService,
    {
      provide: APP_INITIALIZER,
      useFactory: (appConfig: EnvironmentService) => {
        return () => {
          return appConfig.loadAppConfig();
        };
      },
      multi: true,
      deps: [EnvironmentService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
