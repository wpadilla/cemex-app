import {Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {IAvailableIcons, ICommonOption} from "../../../../core/interfaces/common.interface";
import {includeFilter} from "../../../../utils/filter.utils";
import {fadeListAnimation} from "../../../animations/list.animation";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  animations: [
    fadeListAnimation,
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor, OnChanges {
  @Input() icon?: IAvailableIcons;
  @Input() placeholder?: string;
  @Input() autoCompleteKeyItem: string = 'label';
  @Input() autocompleteData: any[] = [];
  autocompleteDataFiltered: any[] = [];
  disabled: boolean = false;
  showAutocomplete: boolean = false;
  value: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.autocompleteDataFiltered = this.autocompleteData;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.autocompleteDataFiltered = this.autocompleteData;
  }

  onChange(event: any) {
  }

  onTouched(event: Event) {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: any): void {
    this.value = value;
    this.filterAutocomplete(value || '');
  }

  handleOnChange(value: string) {
    this.onChange(value);
    this.value = value;
    this.filterAutocomplete(value);
  }

  filterAutocomplete(value: string) {
    this.autocompleteDataFiltered = this.autocompleteData?.filter((item) => includeFilter(item[this.autoCompleteKeyItem], value));
  }

  selectAutocompleteItem(value: string) {
    this.handleOnChange(value);
    this.showAutocomplete = !this.showAutocomplete;
  }

}
