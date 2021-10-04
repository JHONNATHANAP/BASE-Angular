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
        header: ''
      },
      {
        columnDef: 'tareas',
        header: 'Tareas'
      },
      {
        columnDef: 'folio',
        header: 'Folio'
      },
      {
        columnDef: 'documento',
        header: 'Documento'
      },
      {
        columnDef: 'acciones',
        header: 'Acciones'
      }
    ],
    data:[
      {checkbox:{label:"",value:"1"},tareas: 'Validación', folio:'2020-1345-temp', documento:{realizador:"ANDREA MARIN",creacion:'20/09/2020',asunto:'Lorem ipsum dolor sit ament'},acciones:''},
      {checkbox:{label:"",value:"1"},tareas: 'Aprobación', folio:'2020-1345-temp', documento:{realizador:"ANDREA MARIN",creacion:'20/09/2020',asunto:'Lorem ipsum dolor sit ament'},acciones:''},

    ]
  }

  constructor(private store: Store<fromRoot.State>,
    private fb: FormBuilder,) { }

  options = [
    { id: 1, title: "Validacióna" },
    { id: 2, title: "Visación" },
    { id: 3, title: "Aprobación" },
    { id: 4, title: "Recepción" },
    { id: 5, title: "Gestor" },
    { id: 6, title: "Pago" },
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
