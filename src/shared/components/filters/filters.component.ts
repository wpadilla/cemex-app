import {Component} from '@angular/core';
import {ISelectOption} from "../../../core/interfaces/common.interface";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  showFilters?: boolean = true;
  phases: ISelectOption[] = [
    {
      label: 'Deployment',
      value: 'Deployment',
    },
    {
      label: 'Research',
      value: 'Research',
    },
    {
      label: 'Ideation',
      value: 'Ideation',
    },
    {
      label: 'Development',
      value: 'Development',
    }
  ];

  months: ISelectOption[] = [
    {
      label: 'Deployment',
      value: 'Deployment',
    },
    {
      label: 'Research',
      value: 'Research',
    },
    {
      label: 'Ideation',
      value: 'Ideation',
    },
    {
      label: 'Development',
      value: 'Development',
    }
  ];
}
