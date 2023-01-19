import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @ContentChild('listItem') listItem?: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
