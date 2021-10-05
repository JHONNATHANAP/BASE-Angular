import {
  Component,
  OnInit,
  forwardRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true,
    },
  ],
})
export class TextAreaComponent implements OnInit {

  @Input() placeholder: string="";
  @Input() rows: number=3;
  @Output() changed = new EventEmitter<string>();

  value: string = '';
  isDisabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onKeyup(event: Event): void {
    const { target } = event;
    this.value = (target as HTMLInputElement).value;
    this.propagateChange(this.value);
    this.changed.emit(this.value);
  }

  onBlur(): void {
    this.propagateTouched();
  }

}
