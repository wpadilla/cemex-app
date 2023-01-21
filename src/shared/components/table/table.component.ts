import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import {ITableHeaderItem} from "../../../core/interfaces/table.interface";
import {fadeListAnimation} from "../../animations/list.animation";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    fadeListAnimation
  ]
})
export class TableComponent implements OnInit {
  @Input() columns: ITableHeaderItem[] = [];
  @Input() data: unknown[] = [];
  @ContentChild('listItem') listItem?: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
