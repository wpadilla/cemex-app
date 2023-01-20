import {Component, Input} from '@angular/core';
import {fadeAnimation} from "../../animations/common.animations";
import {IAvailableIcons, IColors} from "../../../core/interfaces/common.interface";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  animations: [
    fadeAnimation,
  ]
})
export class IconComponent {
  @Input() type: IAvailableIcons = 'x-lg';
  @Input() iconClass?: string;
  @Input() color: IColors = 'blue-3';
  @Input() label?: string;

  constructor() {
  }

}
