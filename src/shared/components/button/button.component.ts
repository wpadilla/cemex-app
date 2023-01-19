import { Component, Input, OnInit } from '@angular/core';
// import { IAvailableIcons } from "../../../core/interfaces/icons";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() icon?: any;
  @Input() type: 'primary' | 'secondary' = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
