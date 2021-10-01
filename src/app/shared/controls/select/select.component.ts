import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import {ControlItem, Value} from '@app/models/frontend';
export {ControlItem, Value} from '@app/models/frontend';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => SelectComponent ),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {

  @Input() items!: any[];
  @Input() placeholder!: string;
  @Input() label!: string;
  @Input() value!: string;
  @Output() changed = new EventEmitter<Value>();

  selectValue!: Value;
  isDisabled!: boolean;


  constructor() { }

  ngOnInit(): void {
  }

  private propagateChange: any = () => {}
  private propagateTouched: any = () => {}

  writeValue(selectValue: Value): void{
    this.selectValue = selectValue;
  }

  registerOnChange(fn: any): void{
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void{
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void{
    this.isDisabled = isDisabled;
  }

  onChanged(event: MatSelectChange): void{
    const selectValue = event.value ? event.value : null;
    this.selectValue = selectValue;
    this.propagateChange(selectValue);
    this.changed.emit(selectValue);
  }

  onBlur(): void {
    this.propagateTouched();
  }

}
