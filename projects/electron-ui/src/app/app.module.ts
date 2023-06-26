import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SiDropdownModule, SiLandingPageModule, SiMenuModule, SiPopoverModule } from '@simpl/element-ng';
import { SiTranslateNgxTModule } from '@simpl/element-ng/ngx-translate';
import { NgxDatatableModule } from '@siemens/ngx-datatable';

import { AppComponent } from './app.component';
import { LocalisationService, SharedModule } from './shared';
import { EndpointConfigurationComponent } from './pages/endpoint/endpoint-configuration.component';
import { CertificateErrorComponent } from './pages/certificate-error/certificate-error.component';
import { ConnectionErrorComponent } from './pages/connection-error/connection-error.component';
import { CertificateListComponent } from './pages/certificate-list/certificate-list.component';
import { UpdateInfoComponent } from './pages/update/update-info.component';
import { ElectronTitleBarComponent } from './title-bar/electron-title-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './pages/landing/landing.component';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export const initLocalization = (localisationService: LocalisationService): any => {
  return (): any => localisationService.init().toPromise();
};

@NgModule({
  declarations: [
    AppComponent,
    CertificateErrorComponent,
    EndpointConfigurationComponent,
    ConnectionErrorComponent,
    CertificateListComponent,
    UpdateInfoComponent,
    ElectronTitleBarComponent,
    LandingComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SiDropdownModule,
    SiLandingPageModule,
    SiMenuModule,
    SiPopoverModule,
    SiTranslateNgxTModule,
    NgxDatatableModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: APP_INITIALIZER, multi: true, useFactory: initLocalization, deps: [LocalisationService] }
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
