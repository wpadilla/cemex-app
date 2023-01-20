import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISelectOption} from "../../../../core/interfaces/common.interface";
import {verticalSlideAnimation} from "../../../animations/common.animations";
import {ControlValueAccessor} from "@angular/forms";


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [
    verticalSlideAnimation,
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() data: ISelectOption[] = [];
  @Output() select = new EventEmitter();
  showMenu?: boolean;
  disabled?: boolean;
  value?: unknown;
  selectedItem: unknown;


  handleSelectedItem(value: unknown) {
    this.selectedItem = {...this.data.find(item => item.value === value)}.label;
  }

  handleSelect(value: unknown) {
    this.onChange(value)
    this.select.emit()
    this.handleSelectedItem(value);
  }

  onChange(value: unknown) {
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
  }

  writeValue(value: undefined): void {
    this.handleSelectedItem(value);
  }
}
