import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

import {ControlItem, Value} from '@app/models/frontend';
export {ControlItem, Value} from '@app/models/frontend';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => CheckboxesComponent),
      multi: true
    }
  ]
})
export class CheckboxesComponent implements OnInit, ControlValueAccessor {
  checkValue!: Value[];
  isDisabled!: boolean;

  @Input() items!: any[];
  @Input() label!: string;
  @Input() value!: string;
  @Input() class!: string;
  @Output() changed = new EventEmitter<Value[]>();

  constructor() { }

  ngOnInit(): void {
  }

  private propagateChange: any =() => {};

  writeValue(checkValue: Value[]): void{
    this.checkValue = checkValue;
  }

  registerOnChange(fn: any) : void{
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) : void{

  }

  setDisabledState(isDisabled: boolean): void{
    this.isDisabled = isDisabled;
  }

  onChanged(checkValue: Value, checked: Event): void {
     const {target} = checked;
     const resultado = (target as HTMLInputElement).checked;

     const selected = this.getSelected(checkValue, resultado);

     this.checkValue = selected;
     this.propagateChange(selected);
     this.changed.emit(selected);
  }

  private getSelected(checkValue: Value, checked: boolean): Value[]{
    const selected: Value[] = this.checkValue ? [...this.checkValue] : [];
    if(checked){
      if(!selected.includes(checkValue)){
        selected.push(checkValue);
      }
    }else{
      const index = selected.indexOf(checkValue);
      selected.splice(index, 1);
    }

    return selected.length ? selected : [];
  }




  isChecked(checkValue: Value): boolean {
    return this.checkValue && this.checkValue.includes(checkValue);
  }

}
