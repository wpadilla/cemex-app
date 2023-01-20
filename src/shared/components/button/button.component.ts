import { Component, Input, OnInit } from '@angular/core';
import {ButtonTypes} from "../../../core/interfaces/common.interface";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() type: ButtonTypes = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
