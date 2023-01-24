import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ICommonOption} from "../../../core/interfaces/common.interface";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Input() data: any[] = [];
  @Output() filter = new EventEmitter();
  filteredData: any[] = [];

  showFilters?: boolean;
  phases: ICommonOption[] = [
    {
      label: 'All',
      value: '',
    },
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

  months: ICommonOption[] = [
    {
      label: 'All',
      value: '',
    },
    {
      label: 'January',
      value: 'January',
    },
    {
      label: 'February',
      value: 'February',
    },
    {
      label: 'March',
      value: 'March',
    },
    {
      label: 'April',
      value: 'April',
    },
    {
      label: 'May',
      value: 'May',
    },
    {
      label: 'June',
      value: 'June',
    },
    {
      label: 'July',
      value: 'July',
    },
    {
      label: 'August',
      value: 'August',
    }
  ];


  status = [
    {value: "Active", checked: false},
    {value: "Pending Approval", checked: false},
    {value: "Waiting Compensation", checked: false},
  ]

  filtersForm = new FormGroup({
    status: new FormArray(this.status.map(item => new FormControl(item.checked))),
    supplierName: new FormControl(),
    phase: new FormControl(),
    month: new FormControl(),
  })
  nameControlSubscription = new Subscription();
  tags: ICommonOption[] = [];

  get statusFormControl(): FormArray {
    return this.filtersForm.controls.status;
  }

  buildStatusFormControl() {
    return new FormArray(this.status.map(item => new FormControl(item.checked)));
  }

  ngOnInit() {
    this.filteredData = this.data;
    this.nameControlSubscription = this.filtersForm.controls.supplierName.valueChanges.subscribe((v) => {
      setTimeout(() => this.applyFilters())
    })
  }

  applyFilters() {
    const {status} = this.filtersForm.value;
    const statusData = status ? status.map((item, i) => item && this.status[i].value).filter(item => !!item) : [];
    const formValue: any = {
      ...this.filtersForm.value,
      status: statusData,
    }

    let filtered = this.data.filter(item => {
      const data = Object.keys(formValue).map(key => {
        return formValue[key] ? !!(item[key] &&
          item[key].match(new RegExp(`${this.getRegExpFilter(formValue[key])}`, 'gi'))) : true;
      })
      return data.reduce((a, b) => a && b, true);
    })

    this.filteredData = [...filtered];
    this.filter.emit(filtered);
    this.showFilters = false;
    this.buildTags(formValue);
  }


  buildTags(formData: any) {
    this.tags = Object.keys(formData).map(key => {
        if (!!formData[key] && formData[key].length) {
            return ({
              label: `${key}: ${formData[key]}`,
              value: key,
            })
        }
        return false;
      }
    ).filter(item => !!item) as ICommonOption[];
  }

  removeFilter(controlName: string) {
    (this.filtersForm.controls as any)[controlName].reset();
    this.applyFilters();
  }

  ngOnDestroy(): void {
    this.nameControlSubscription.unsubscribe();
  }

  clearFilter() {
    this.filtersForm.reset();
  }

  getRegExpFilter(data: any) {
    if(typeof data === 'string') {
      return data;
    }

    return data && data.length ? `^${data.join("$|^")}$` : '';


  }
}
