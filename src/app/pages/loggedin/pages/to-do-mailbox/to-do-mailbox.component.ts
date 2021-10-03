import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { View } from '@app/models/frontend';
import { TableModel } from '@app/shared/tables/table/table.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store';
import * as fromLoggedin from '../../store/loggedin';

@Component({
  selector: 'app-to-do-mailbox',
  templateUrl: './to-do-mailbox.component.html',
  styleUrls: ['./to-do-mailbox.component.scss']
})
export class ToDoMailboxComponent implements OnInit {
  form !: FormGroup;
  loading$ !: Observable<boolean | null>;
  view: View = {
    title: "Buzón de tareas pendientes",
    icon: { class: "material-icons-outlined icons md-36", name: "drafts" }
  };

  table:TableModel={
    columns: [
      {
        columnDef: 'checkbox',
        header: '',
        cell: (element: any) => `${element.checkbox}`
      },
      {
        columnDef: 'tareas',
        header: 'Tareas',
        cell: (element: any) => `${element.tareas}`
      },
      {
        columnDef: 'folio',
        header: 'Folio',
        cell: (element: any) => `${element.folio}`
      },
      {
        columnDef: 'documento',
        header: 'Documento',
        cell: (element: any) => `${element.documento}`
      },
      {
        columnDef: 'acciones',
        header: 'Acciones',
        cell: (element: any) => `${element.acciones}`
      }
    ],
    data:[
      {checkbox: '', tareas: 'Hydrogen', folio: 1.0079, documento: 'H',acciones:''},

    ]
  }

  constructor(private store: Store<fromRoot.State>,
    private fb: FormBuilder,) { }

  options = [
    { id: 1, title: "Validacióna" },
    { id: 2, title: "Visación" },
    { id: 3, title: "Aprobación" },
    { id: 3, title: "Recepción" },
    { id: 3, title: "Gestor" },
    { id: 3, title: "Pago" },
  ]

  ngOnInit(): void {
    //this.loading$ = this.store.pipe(select(fromUser.getLoading));

    this.form = this.fb.group({
      folio: [null, {
        updateOn: 'change',
        validators: [

          Validators.maxLength(128)
        ]
      }],
      area: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
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
      range: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      usuario: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      rol: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      asunto: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      glosa: [null, {
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
