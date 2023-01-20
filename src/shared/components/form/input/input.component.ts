import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {IAvailableIcons} from "../../../../core/interfaces/common.interface";

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
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() icon?: IAvailableIcons;
  @Input() placeholder?: string;

  disabled?: boolean;
  value: string = '';

  constructor() {
  }


  ngOnInit(): void {
  }

  onChange(event: Event) {
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
    this.value = value
  }


}
