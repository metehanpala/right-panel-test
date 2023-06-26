import { NgModule } from '@angular/core';
import { GmsCentralFunctionRootServicesModule } from '@gms-flex/central-function-root-services';
import { GmsCommonEventRootServicesModule } from '@gms-flex/common-event-root-services';
import { GmsDocumentRootServicesModule } from '@gms-flex/document-root-services';
import { GmsEventDetailsRootServicesModule } from '@gms-flex/event-details-root-services';
import { GmsEventListRootServicesModule } from '@gms-flex/event-list-root-services';
import { GmsGraphicsViewerRootServicesModule } from '@gms-flex/graphics-viewer-root-services';
import { GmsLogViewerRootServicesModule } from '@gms-flex/log-viewer-root-services';
import { GmsNodeMapRootServicesModule } from '@gms-flex/nodemap-root-services';
import { GmsNotificationRecipientGroupRootServicesModule } from '@gms-flex/notification-recipient-group-root-services';
import { GmsNotificationRecipientRootServicesModule } from '@gms-flex/notification-recipient-root-services';
import { GmsNotificationTemplateRootServicesModule } from '@gms-flex/notification-template-root-services';
import { GmsPlantOverviewRootServicesModule } from '@gms-flex/plant-overview-root-services';
import { GmsPowermangerPowerQualityRootServicesModule } from '@gms-flex/powermanager-power-quality-root-services';
import { GmsPropertyRootServicesModule } from '@gms-flex/property-root-services';
import { GmsRelatedItemsRootServicesModule } from '@gms-flex/related-items-root-services';
import { GmsReportViewerRootServicesModule } from '@gms-flex/report-viewer-root-services';
import { GmsRoomOverviewRootServicesModule } from '@gms-flex/room-overview-root-services';
import { GmsSceneRootServicesModule } from '@gms-flex/scene-root-services';
import { GmsScheduleRootServicesModule } from '@gms-flex/schedule-root-services';
import { GmsSubscriberRootServicesModule } from '@gms-flex/subscriber-root-services';
import { GmsSummaryBarRootServicesModule } from '@gms-flex/summary-bar-root-services';
import { GmsSystemBrowserRootServicesModule } from '@gms-flex/system-browser-root-services';
import { GmsTextualViewerRootServicesModule } from '@gms-flex/textual-viewer-root-services';
import { GmsTrendRootServicesModule } from '@gms-flex/trend-root-services';
import { GmsVideoManagementRootServicesModule } from '@gms-flex/video-management-root-services';
import { GmsWsScheduleRootServicesModule } from '@gms-flex/ws-schedule-root-services';

@NgModule({
  imports: [
    // ADD HERE YOUR ROOT SNAPIN MODULE NAME
    GmsCentralFunctionRootServicesModule,
    GmsCommonEventRootServicesModule,
    GmsDocumentRootServicesModule,
    GmsEventDetailsRootServicesModule,
    GmsEventListRootServicesModule,
    GmsGraphicsViewerRootServicesModule,
    GmsLogViewerRootServicesModule,
    GmsNodeMapRootServicesModule,
    GmsNotificationRecipientGroupRootServicesModule,
    GmsNotificationRecipientRootServicesModule,
    GmsNotificationTemplateRootServicesModule,
    GmsPlantOverviewRootServicesModule,
    GmsPowermangerPowerQualityRootServicesModule,
    GmsPropertyRootServicesModule,
    GmsRelatedItemsRootServicesModule,
    GmsReportViewerRootServicesModule,
    GmsRoomOverviewRootServicesModule,
    GmsSceneRootServicesModule,
    GmsScheduleRootServicesModule,
    GmsSubscriberRootServicesModule,
    GmsSummaryBarRootServicesModule,
    GmsSystemBrowserRootServicesModule,
    GmsTextualViewerRootServicesModule,
    GmsTrendRootServicesModule,
    GmsVideoManagementRootServicesModule,
    GmsWsScheduleRootServicesModule
  ]
})

export class RootServicesModule {}
