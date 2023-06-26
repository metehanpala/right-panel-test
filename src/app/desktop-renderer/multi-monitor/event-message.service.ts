import { Injectable } from '@angular/core';
import { EventMessage, EventMessageType, EventService } from '@gms-flex/services';
import { isNullOrUndefined } from '@siemens/ngx-datatable';

@Injectable()
export class EventMessageService {
  constructor(
    private readonly eventService: EventService
  ) {}

  public handleEventMessage(data: EventMessage): void {
    if (!isNullOrUndefined(data)) {
      if (data.type === EventMessageType.EventFiltering) {
        this.eventService.notificationActionFilter(data.data);
      }
    }
  }
}
