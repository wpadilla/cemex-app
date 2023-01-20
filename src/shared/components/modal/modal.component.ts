import {Component, EventEmitter, Input, Output} from '@angular/core';
import {fadeAnimation, verticalSlideAnimation} from "../../animations/common.animations";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    fadeAnimation,
    verticalSlideAnimation,
  ]
})
export class ModalComponent {
  @Input() title?: string;
  @Input() show?: boolean;
  @Output() accept = new EventEmitter();
  @Output() cancel = new EventEmitter();

  onCancel() {
    this.cancel.emit();
  }

}
