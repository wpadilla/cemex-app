import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ISelectOption} from "../../../../core/interfaces/common.interface";
import {verticalSlideAnimation} from "../../../animations/common.animations";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [
    verticalSlideAnimation,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() data: ISelectOption[] = [];
  @Input() multiple?: boolean = false;
  @Output() select = new EventEmitter();
  showMenu?: boolean;
  disabled?: boolean;
  value?: unknown;
  selectedLabelData: any = [];
  selectedValueData: any = [];


  handleSelectedItem(value: unknown, isRemoving?: boolean) {
    const selectedItem: ISelectOption = {...this.data.find(item => item.value === value)} as ISelectOption;
    const selectedLabel = selectedItem.label;
    const selectedValue = selectedItem.value;

    if(this.multiple) {
      if(value && value !== '') {
        if(isRemoving) {
          this.selectedLabelData = this.selectedLabelData.filter((item: string) => item !== selectedLabel)
          this.selectedValueData = this.selectedValueData.filter((item: any) => !this.deepEqual(item, selectedValue))
        } else {
          selectedLabel && this.selectedLabelData.push(selectedLabel)
          selectedValue && this.selectedValueData.push(selectedValue)
        }
      } else {
        this.selectedLabelData = [];
        this.selectedValueData = [];
      }


    } else {
      this.selectedLabelData = selectedLabel;
      this.selectedValueData = selectedValue;
    }
  }

  handleSelect(selectedValue: any, event: Event) {
    if(selectedValue)
    event.stopPropagation();
    let valueData = selectedValue;
    let isRemoving = false;
    if(this.multiple && selectedValue !== '') {
      isRemoving =this.selectedValueData.some((item: unknown) => this.deepEqual(item, valueData))
      if(isRemoving) {
        valueData = this.selectedValueData.filter((item: unknown) => !this.deepEqual(item, valueData));
      } else {
        valueData = [...this.selectedValueData, valueData];
      }
    }

    this.onChange(valueData);
    this.select.emit(valueData);
    this.handleSelectedItem(selectedValue, isRemoving);
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

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.showMenu = !this.showMenu;
  }

  deepEqual(value1: any, value2: any): boolean {
    return JSON.stringify(value1) === JSON.stringify(value2);
  }
}
