import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { View } from '@app/models/frontend';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store';
import * as fromLoggedin from '../../store/loggedin';
@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.scss']
})
export class NewDocumentComponent implements OnInit {
  form !: FormGroup;
  loading$ !: Observable<boolean | null>;
  view: View = {
    title: "Ingreso Documento",
    icon: { class: "material-icons-outlined icons md-36", name: "article" }
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
     
      documentType: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      categoria: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      clasificacion: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      materia: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      glosa: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      file: [null, {
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
