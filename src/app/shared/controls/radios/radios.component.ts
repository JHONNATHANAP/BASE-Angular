import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

import {ControlItem, Value} from '@app/models/frontend';

export {ControlItem, Value} from '@app/models/frontend';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => RadiosComponent ),
      multi: true
    }
  ]
})
export class RadiosComponent implements OnInit, ControlValueAccessor {

  checkValue!:  Value;
  isDisabled!: boolean;
  @Input() label!: string;
  @Input() value!: string;
  @Input() items!: any[];
  @Output() changed = new EventEmitter<Value>();

  constructor() { }

  ngOnInit(): void {
  }

  private propagateChange:any =()=>{}

  writeValue(checkValue: Value): void{
    this.checkValue = checkValue;
  }

  registerOnChange(fn: any): void{
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void{}

  setDisabledState(isDisabled: boolean): void{
    this.isDisabled = isDisabled;
  }

  onChanged(checkValue: Value): void{
    this.checkValue = checkValue;
    this.propagateChange(checkValue);
    this.changed.emit(checkValue);
  }

  isChecked(checkValue: Value): boolean{
    return this.checkValue === checkValue;
  }


}
