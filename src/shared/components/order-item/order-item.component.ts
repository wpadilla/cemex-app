import { Component, Input, OnInit } from '@angular/core';
import {IOrders} from "../../../core/interfaces/order.interface";
import {BadgeTypes} from "../../../core/interfaces/common.interface";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input() order: IOrders = {} as IOrders;
  badgeType?: BadgeTypes;

  constructor() { }

  ngOnInit(): void {
    this.badgeType = this.order.status.split(' ')[0].toLowerCase() as BadgeTypes;
  }

}
