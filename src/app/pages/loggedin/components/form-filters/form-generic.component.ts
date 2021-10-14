import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { markFormGroupTouched } from '@app/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-generic',
  templateUrl: './form-generic.component.html',
  styleUrls: ['./form-generic.component.scss']
})
export class FormGenericComponent implements OnInit {
  form !: FormGroup;
  loading$ !: Observable<boolean | null>;

  constructor(private fb: FormBuilder,) { }
  @Input('controls') controls:any[] = [ ]
  ngOnInit(): void {
    var group: any = {};

    this.controls.map((e) => {
      group[e.controlName] = [e.controlValue, {
        updateOn: 'change',
        validators: e.validators
      }]
    })
    console.log(group)

    this.form = this.fb.group(group)

  }

  onSubmit() {
    if (!this.form.valid) {
      markFormGroupTouched(this.form);
    }
  }


}
