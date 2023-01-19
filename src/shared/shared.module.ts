import {NgModule} from "@angular/core";
import {IconComponent} from "./components/icon/icon.component";
import {ButtonComponent} from './components/button/button.component';
import {CommonModule} from "@angular/common";
import {TableComponent} from './components/table/table.component';
import {OrderItemComponent} from './components/order-item/order-item.component';
import {BadgeComponent} from './components/badge/badge.component';
import {ClickOutsideDirective} from "./directives/click-outside.directive";
import {InputComponent} from "./components/form/input/input.component";
import {SelectComponent} from "./components/form/select/select.component";
import {CheckboxComponent} from "./components/form/checkbox/checkbox.component";
import { TableRecordComponent } from './components/table/components/table-record/table-record.component';
import { TableCellComponent } from './components/table/components/table-cell/table-cell.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    IconComponent,
    ClickOutsideDirective,
    ButtonComponent,
    TableComponent,
    OrderItemComponent,
    BadgeComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    TableRecordComponent,
    TableCellComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [
    IconComponent,
    ClickOutsideDirective,
    ButtonComponent,
    TableComponent,
    OrderItemComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    BreadcrumbsComponent,
  ]
})
export class SharedModule {
}
