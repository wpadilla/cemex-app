import { Component, Input, OnInit } from '@angular/core';
import {IOrders} from "../../../core/interfaces/order.interface";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input() order: IOrders = {} as IOrders;
  value = 'Status!!'
  constructor() { }

  ngOnInit(): void {
  }

}
