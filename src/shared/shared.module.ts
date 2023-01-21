import {NgModule} from "@angular/core";
import {IconComponent} from "./components/icon/icon.component";
import {ButtonComponent} from './components/button/button.component';
import {CommonModule} from "@angular/common";
import {TableComponent} from './components/table/table.component';
import {OrderItemComponent} from './components/order-item/order-item.component';
import {BadgeComponent} from './components/badge/badge.component';
import {InputComponent} from "./components/form/input/input.component";
import {SelectComponent} from "./components/form/select/select.component";
import {CheckboxComponent} from "./components/form/checkbox/checkbox.component";
import { TableRecordComponent } from './components/table/components/table-record/table-record.component';
import { TableCellComponent } from './components/table/components/table-cell/table-cell.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FiltersComponent } from './components/filters/filters.component';
import { TagComponent } from './components/tag/tag.component';
import { ModalComponent } from './components/modal/modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    IconComponent,
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
    FiltersComponent,
    TagComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    IconComponent,
    ButtonComponent,
    TableComponent,
    OrderItemComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    BreadcrumbsComponent,
    FiltersComponent,
  ]
})
export class SharedModule {
}
