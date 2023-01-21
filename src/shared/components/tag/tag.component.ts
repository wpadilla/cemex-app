import {Component, EventEmitter, Input, Output} from '@angular/core';
import {fadeAnimation} from "../../animations/common.animations";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  animations: [
    fadeAnimation,
  ]
})
export class TagComponent {
  @Input() label?: string;
  @Output() close = new EventEmitter();

}
