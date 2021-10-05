import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { ControlItem, Value } from '@app/models/frontend';
export { ControlItem, Value } from '@app/models/frontend';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements OnInit {

  checkValue!: Value[];
  isDisabled!: boolean;

  @Input() checkbox!: any;
  @Input() label!: string;
  @Input() value!: string;
  @Input() class!: string;
  @Output() changed = new EventEmitter<Value[]>();

  constructor() { }

  ngOnInit(): void {
  }

  private propagateChange: any = () => { };

  writeValue(checkValue: Value[]): void {
    this.checkValue = checkValue;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChanged(checkValue: Value, checked: Event): void {
    this.checkbox[this.value] !=   this.checkbox[this.value];
    this.propagateChange(this.checkbox[this.value]);
    this.changed.emit(this.checkbox[this.value]);
  }

  isChecked(checkValue: Value): boolean {
    return this.checkValue && this.checkValue.includes(checkValue);
  }

}
