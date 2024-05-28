import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() message: string;
  @Output() close = new EventEmitter<string>();

  onClose($event: any) {
    this.close.emit('test');
  }
}
