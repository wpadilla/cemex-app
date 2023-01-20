import {Component, Input} from '@angular/core';
import {IPositionTypes} from "../../../../../core/interfaces/common.interface";

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent {
  @Input() label = '';
  @Input() value = '';
  @Input() position: IPositionTypes = 'left'
}
