import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout/layout.component";
import {NavbarComponent} from "./layout/components/navbar/navbar.component";
import {ContentComponent} from "./layout/components/content/content.component";



@NgModule({
  declarations: [LayoutComponent, NavbarComponent, ContentComponent],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
