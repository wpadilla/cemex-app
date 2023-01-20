import { Component, Input, OnInit } from '@angular/core';
import {BadgeTypes} from "../../../core/interfaces/common.interface";

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() type?: BadgeTypes = 'active';

  constructor() { }

  ngOnInit(): void {
  }

}
