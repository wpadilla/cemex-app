import {Component} from '@angular/core';
import {IOrders} from "../core/interfaces/order.interface";
import {verticalSlideAnimation} from "../shared/animations/common.animations";
import {ITableHeaderItem} from "../core/interfaces/table.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [verticalSlideAnimation]
})
export class AppComponent {
  title = 'cemex-app';
  orderTableColumns: ITableHeaderItem[] = [
    {title: 'Status'},
    {title: 'Suplier Name'},
    {title: 'Month'},
    {title: 'Phase'},
    {title: 'Internal Order'},
    {title: 'Amount (USD)', position: 'right'},
  ];

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

  breadcrumbs = ['Financial Management', 'CAPEX Management'];

}
