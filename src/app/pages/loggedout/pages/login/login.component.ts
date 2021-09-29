import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { regexErrors, regex, markFormGroupTouched } from '@app/shared/utils';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form !: FormGroup;
  regexErrors = regexErrors;
  loading$ !: Observable<boolean | null>;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(fromUser.getLoading));

    this.form = this.fb.group({
      email: [null, {
        updateOn: 'change',
         validators: [
          Validators.required,
          Validators.maxLength(128),
         // Validators.pattern(regex.email)
        ]
      }],


      password: [null, {
        updateOn: 'change',
         validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          //Validators.pattern(regex.password)
        ]
      }],
    })


  }

  onSubmit(): void {

    if (this.form.valid) {
      const value = this.form.value;

      const userLoginRequest: fromUser.EmailPasswordCredentials = {
        email: value.email,
        password: value.password,
      }

      this.store.dispatch(new fromUser.SignInEmail(userLoginRequest));

    } else {
      markFormGroupTouched(this.form);
    }


  }

}
