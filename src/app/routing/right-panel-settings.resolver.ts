import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { RightPanelStateService } from '../right-panel/right-panel-state.service';

@Injectable({
  providedIn: 'root'
})
export class RightPanelSettingsResolver implements Resolve<boolean> {
  constructor(private readonly rightPanelStateService: RightPanelStateService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.rightPanelStateService.getRightPanelSettings();
  }

}
