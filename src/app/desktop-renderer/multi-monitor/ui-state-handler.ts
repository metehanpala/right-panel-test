import { Injectable } from '@angular/core';
import { SnapinMessageBroker } from '@gms-flex/core';
import { CnsHelperService, CnsLabel, NavbarCommunicationService } from '@gms-flex/services';
import { AppContextService, isNullOrUndefined, TraceService } from '@gms-flex/services-common';
import { SiThemeService } from '@simpl/element-ng';

import { themeTypeAuto, themeTypeSystem } from './multi-monitor.service';

@Injectable({ providedIn: 'root' })
export class UiStateHandler {

  public constructor(
    private readonly snapinMessageBroker: SnapinMessageBroker,
    private readonly traceService: TraceService,
    public cnsHelper: CnsHelperService,
    private readonly navBarService: NavbarCommunicationService,
    private readonly siThemeService: SiThemeService,
    private readonly appContextService: AppContextService
  ) {}

  public handleUiState(previousState: any, newState: any): void {
    for (const property in newState) {
      if (isNullOrUndefined(previousState)) {
        this.setUiState(property, newState);
      } else if ((!isNullOrUndefined(previousState[property]) && !isNullOrUndefined(newState[property]))
      || JSON.stringify(previousState[property]) !== JSON.stringify(newState[property])
      ) {
        this.setUiState(property, newState);
      }
    }
  }

  private setUiState(property, newState): void {
    switch (property) {
      case 'textRepresentation':
        this.navBarService.setCnsLabel(newState.textRepresentation);
        this.cnsHelper.setActiveCnsLabel(newState.textRepresentation);
        break;
      case 'statusBarHeight':
        this.navBarService.setStatusBarState(newState.statusBarHeight);
        break;
      case 'buzzerEnabled':
        this.navBarService.setBuzzerState(newState.buzzerEnabled);
        break;
      case 'themeType':
        if (newState.themeType === themeTypeSystem) {
          newState.themeType = themeTypeAuto;
        }
        this.appContextService.setThemeType(newState.themeType);
        break;
      case 'mode':
        this.traceService.debug(`Detected mode: ${newState[property].currentMode.id}}`);
        this.snapinMessageBroker.changeMode(newState.mode.currentMode, undefined, newState.mode.firstSelectionObj)
          .subscribe(modeChanged => {
            if (modeChanged) {
              this.traceService.debug(`Mode changed to : ${newState[property].currentMode.id}}`);
            }
          });
        break;
      default:
        return;
    }

  }

}
