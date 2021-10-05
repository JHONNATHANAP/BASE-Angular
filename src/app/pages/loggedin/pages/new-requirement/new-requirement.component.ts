import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { View } from '@app/models/frontend';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store';
import * as fromLoggedin from '../../store/loggedin';
@Component({
  selector: 'app-new-requirement',
  templateUrl: './new-requirement.component.html',
  styleUrls: ['./new-requirement.component.scss']
})
export class NewRequirementComponent implements OnInit {
  form !: FormGroup;
  loading$ !: Observable<boolean | null>;
  view: View = {
    title: "Ingreso Requerimiento",
    icon: { class: "material-icons-outlined icons md-36", name: "edit" }
  };
  options = [
    { id: 1, title: "Validacióna" },
    { id: 2, title: "Visación" },
    { id: 3, title: "Aprobación" },
    { id: 4, title: "Recepción" },
    { id: 5, title: "Gestor" },
    { id: 6, title: "Pago" },
  ]

  constructor(private store: Store<fromRoot.State>,
    private fb: FormBuilder,) { }

  ngOnInit(): void {

    this.form = this.fb.group({
     
      requirementType: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      purchaseType: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      category: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      adquisicionType: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      moneyType: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      purchaseName: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      specification: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      objetive: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      recomendation: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      variation: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      ejecution: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      deliveries: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
    })



    const loggedin: fromLoggedin.Loggedin = {
      view: this.view
    }
    this.store.dispatch(new fromLoggedin.Change(loggedin));
  }
  onSubmit() {

  }
}
