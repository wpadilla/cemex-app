import {NgModule} from "@angular/core";
import {IconComponent} from "./components/icon/icon.component";
import {ButtonComponent} from './components/button/button.component';
import {CommonModule} from "@angular/common";
import {TableComponent} from './components/table/table.component';
import {OrderItemComponent} from './components/order-item/order-item.component';
import {BadgeComponent} from './components/badge/badge.component';
import {ClickOutsideDirective} from "./directives/click-outside.directive";
import {AppFormModule} from "./components/form/app-form.module";

@NgModule({
  declarations: [
    IconComponent,
    ClickOutsideDirective,
    ButtonComponent,
    TableComponent,
    OrderItemComponent,
    BadgeComponent,
  ],
  imports: [
    CommonModule,
    AppFormModule,
  ],
  providers: [],
  exports: [
    IconComponent,
    ClickOutsideDirective,
    ButtonComponent,
    TableComponent,
    OrderItemComponent,
  ]
})
export class SharedModule {
}
