import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ISelectOption} from "../../../core/interfaces/common.interface";
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

  showFilters?: boolean;
  phases: ISelectOption[] = [
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

  months: ISelectOption[] = [
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
  tags: ISelectOption[] = [];

  get statusFormControl(): FormArray {
    return this.filtersForm.controls.status;
  }

  buildStatusFormControl() {
    return new FormArray(this.status.map(item => new FormControl(item.checked)));
  }

  ngOnInit() {
    this.nameControlSubscription = this.filtersForm.controls.supplierName.valueChanges.subscribe((v) => {
      setTimeout(() => this.applyFilters())
    })
  }

  applyFilters() {
    const {status} = this.filtersForm.value;
    const statusData = status ? status.map((item, i) => item && this.status[i].value).filter(item => !!item) : [];
    const formValue: any = {
      ...this.filtersForm.value,
    }

    const formData: any = {};

    Object.keys(formValue).forEach(key => {
      if (formValue[key] && key !== 'status') {
        formData[key] = formValue[key]
      }
    })

    let filtered = this.data.filter(item => {
      const data = Object.keys(formData).map(key => {
        return !!(item[key] && item[key].match(new RegExp(`${formData[key]}`, 'gi')))
      })
      return data.reduce((a, b) => a && b, true);
    })

    if (statusData && statusData.length > 0) {
      filtered = filtered.filter(item => statusData.indexOf(item.status) !== -1)
    }
    this.filter.emit(filtered);
    this.showFilters = false;
    this.buildTags(statusData);
  }


  buildTags(status: any[]) {
    const {value} = this.filtersForm as any;
    this.tags = Object.keys(value).map(key => {
        if (!!value[key]) {
          if (key !== 'status') {
            return ({
              label: `${key}: ${value[key]}`,
              value: key,
            })
          } else if (!!status.length) {
            return ({
              label: `${key}: ${(status).join(',')}`,
              value: key,
            })
          }
        }
        return false;
      }
    ).filter(item => !!item) as ISelectOption[];
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
}
