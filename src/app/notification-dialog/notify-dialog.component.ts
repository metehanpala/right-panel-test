import { Component, Input } from '@angular/core';

@Component({
  selector: 'gms-notify-dialog',
  templateUrl: './notify-dialog.component.html'
})
export class NotifyDialogComponent {
  @Input() public heading = '';
  @Input() public message = '';
}
