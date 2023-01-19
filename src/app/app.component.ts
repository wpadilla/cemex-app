import { Component } from '@angular/core';
import {IOrders} from "../core/interfaces/order.interface";
import {verticalSlideAnimation} from "../shared/animations/common.animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [verticalSlideAnimation]
})
export class AppComponent {
  title = 'cemex-app';
  contractsColumns = ['Status', 'Suplier Name', 'Month', 'Phase', 'Internal Order', 'Amount (USD)'];
  orders: IOrders[] = [
    {
      amount: 5000,
      supplierName: 'Jakub Zavazal',
      month: 'March',
      phase: 'Deployment',
      internalOrder: 200,
      status: 'Active',
    },
    {
      amount: 3000,
      supplierName: 'Jonathan Holden',
      month: 'January',
      phase: 'Research',
      internalOrder: 200,
      status: 'Waiting Compensation',
    },
    {
      amount: 4300,
      supplierName: 'Vlad Titus Dor',
      month: 'February',
      phase: 'Deployment',
      internalOrder: 200,
      status: 'Pending Approval',
    }
  ]

}
