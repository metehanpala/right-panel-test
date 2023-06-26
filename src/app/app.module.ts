import { PortalModule } from '@angular/cdk/portal';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NgZone, Optional } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HfwControlsModule, HfwLoginModule, NgxBootstrapModule } from '@gms-flex/controls';
import { HfwCoreModule } from '@gms-flex/core';
import { GmsNavbarModule } from '@gms-flex/navigation-bar';
import { GmsNotificationServicesModule } from '@gms-flex/notification-services';
import { GmsPowermanagerPowerQualitySharedModule } from '@gms-flex/powermanager-power-quality-shared';
import { GmsRelatedItemsSnapInModule } from '@gms-flex/related-items';
import { GmsScheduleServicesModule } from '@gms-flex/schedule-services';
import { GmsServicesModule, MultiMonitorServiceBase } from '@gms-flex/services';
import { HFW_TRANSLATION_FILE_TOKEN, HfwServicesCommonModule, MultiTranslateHttpLoader, TraceService } from '@gms-flex/services-common';
import { AboutPopoverModule, EventsModule, GmsSnapInCommonModule } from '@gms-flex/snapin-common';
import { GmsVideoManagementControlModule } from '@gms-flex/video-management-control';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SiAccordionModule, SiContentActionBarModule, SiDropdownModule, SiEmptyStateModule, SiFilteredSearchModule, SiLoadingSpinnerModule,
  SiMenuModule, SiNavbarVerticalModule, SiPopoverModule,
  SiPromptDialogButtonsModule, SiResizeObserverModule, SiSearchBarModule, SiSidePanelModule, SiSliderModule, SiSwitchModule,
  SiToastNotificationModule } from '@simpl/element-ng';
import { SiTranslateNgxTModule } from '@simpl/element-ng/ngx-translate';
import { SimplObjectBrowserNgModule } from '@simpl/object-browser-ng';
import { CookieService } from 'ngx-cookie-service';
import { interval } from 'rxjs';

import { routing } from './app-routing.module';
import { ApplicationComponent, trcModuleNameApp } from './app.component';
import { EventMessageService } from './desktop-renderer/multi-monitor/event-message.service';
import { MultiMonitorService } from './desktop-renderer/multi-monitor/multi-monitor.service';
import { ObjectMessageService } from './desktop-renderer/multi-monitor/object-message.service';
import { GmsLocaleId, GmsLocaleIdService } from './gms-locale-id.service';
import { LoadingComponent } from './loading/loading.component';
import { MainComponent } from './main/main.component';
import { NotifyDialogComponent } from './notification-dialog/notify-dialog.component';
import { SytemRPComponent } from './right-panel/sytem-rp/sytem-rp.component';
import { RootServicesModule } from './root-services.module';
import { CanActivateHfwPage } from './routing/canactivate-hfwpage.guard';
// import { SiAccordionModule, SiContentActionBarModule, SiEmptyStateModule, SiSidePanelService, SiSwitchModule } from '@simpl/element-ng';
import { ElectronTitleBarComponent } from './title-bar/electron-title-bar.component';
import { WindowCaptureListComponent } from './window-list/window-capture-list.component';

let appTickCounter = 0;

// export function getAppModule(modulesArray: any): Type<any> {
@NgModule({
  imports: [
    AboutPopoverModule,
    BrowserAnimationsModule,
    BrowserModule,
    EventsModule,
    FormsModule,
    GmsNavbarModule,
    GmsNotificationServicesModule,
    GmsPowermanagerPowerQualitySharedModule,
    GmsRelatedItemsSnapInModule,
    GmsScheduleServicesModule,
    GmsServicesModule,
    GmsSnapInCommonModule.forRoot(),
    GmsVideoManagementControlModule,
    HfwControlsModule,
    HfwCoreModule,
    HfwLoginModule,
    HfwServicesCommonModule,
    HttpClientModule,
    NgxBootstrapModule,
    PortalModule,
    RootServicesModule,
    routing,
    SiAccordionModule,
    SiContentActionBarModule,
    SiDropdownModule,
    SiEmptyStateModule,
    SiFilteredSearchModule,
    SiLoadingSpinnerModule,
    SiMenuModule,
    SimplObjectBrowserNgModule,
    SiNavbarVerticalModule,
    SiPopoverModule,
    SiPromptDialogButtonsModule,
    SiSearchBarModule,
    SiSidePanelModule,
    SiSliderModule,
    SiSwitchModule,
    SiToastNotificationModule,
    SiTranslateNgxTModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (httpClient: HttpClient, trace: TraceService, prefixOptional: any[]): MultiTranslateHttpLoader =>
          new MultiTranslateHttpLoader(httpClient, trace, './i18n/', prefixOptional),
        deps: [HttpClient, TraceService, [new Optional(), HFW_TRANSLATION_FILE_TOKEN]]
      }
    })
  ],
  declarations: [
    ApplicationComponent,
    ElectronTitleBarComponent,
    LoadingComponent,
    MainComponent,
    NotifyDialogComponent,
    SytemRPComponent,
    WindowCaptureListComponent
  ],
  providers: [
    CanActivateHfwPage,
    { provide: 'appSettingFilePath', useValue: 'config/app-settings.json' },
    { provide: 'productSettingFilePath', useValue: 'config/product-settings.json' },
    CookieService,
    { provide: MultiMonitorServiceBase, useClass: MultiMonitorService },
    EventMessageService,
    ObjectMessageService,
    { provide: LOCALE_ID, useClass: GmsLocaleId, deps: [GmsLocaleIdService, TraceService] }
  ],
  bootstrap: [ApplicationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationModule {
  constructor(applicationRef: ApplicationRef,
    private readonly ngZone: NgZone,
    private readonly traceService: TraceService) {
    if (traceService.isDebugEnabled(trcModuleNameApp)) {
      const originalTick: () => void = applicationRef.tick;
      applicationRef.tick = function(): any {
        const start: number = performance.now();
        const retValue: any = originalTick.apply(this, arguments);
        const end: number = performance.now();
        appTickCounter = appTickCounter + 1;
        traceService.debug(trcModuleNameApp, 'Application.tick() time: ' + (end - start));
        return retValue;
      };

      this.ngZone.runOutsideAngular(() => {
        interval(5000).subscribe(value => this.onInstrumentationTimer(value));
      });
    }
  }

  private onInstrumentationTimer(counter: number): void {
    if (this.traceService.isDebugEnabled(trcModuleNameApp)) {
      this.traceService.debug(trcModuleNameApp, 'Number of application ticks per second: ' + appTickCounter / 5);
    }
    appTickCounter = 0;
  }
}
