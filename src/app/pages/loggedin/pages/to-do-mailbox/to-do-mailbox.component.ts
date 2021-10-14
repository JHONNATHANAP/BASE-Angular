import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { View } from '@app/models/frontend';
import * as fromRoot from '@app/pages/loggedin/store';
import * as fromLoggedin from '@app/pages/loggedin/store/loggedin';
import { TableModel } from '@app/shared/tables/table/table.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-to-do-mailbox',
  templateUrl: './to-do-mailbox.component.html',
  styleUrls: ['./to-do-mailbox.component.scss']
})
export class ToDoMailboxComponent implements OnInit {

  loading$ !: Observable<boolean | null>;
  view: View = {
    title: "Buzón de tareas pendientes",
    icon: { class: "material-icons-outlined icons md-36", name: "drafts" }
  };
  options: any = [
    { id: 1, title: "Validacióna" },
    { id: 2, title: "Visación" },
    { id: 3, title: "Aprobación" },
    { id: 4, title: "Recepción" },
    { id: 5, title: "Gestor" },
    { id: 6, title: "Pago" },
  ]
  controls: any[] = [

  ]


  table: TableModel = {
    columns: [
      {
        columnDef: 'checkbox',
        columnFilter: 'checkbox',
        header: ''
      },
      {
        columnDef: 'tareas',
        columnFilter: 'tareas',
        header: 'Tareas'
      },
      {
        columnDef: 'folio',
        columnFilter: 'folio',
        header: 'Folio'
      },
      {
        columnDef: 'documento',
        columnFilter: 'documento',
        header: 'Documento'
      },
      {
        columnDef: 'acciones',
        columnFilter: 'acciones',
        header: 'Acciones'
      }
    ],
    data: [

    ],
    actions: [
      { title: "Completar tarea", event: 'completeTask' },
      { title: "Ver archivo", event: 'showFile' },
      { title: "Ir a documento", event: 'goToFile' },
    ]
  }

  constructor(private store: Store<fromRoot.State>) { }

  actionTable(event?: any) {
    console.log(event)
  }
  ngOnInit(): void {
    //this.loading$ = this.store.pipe(select(fromUser.getLoading));
    this.controls = [
      {
        controlName: "folio", controlValue: null, placeholder: "Número de folio", validators: [Validators.required], class: "col-6", type: "text"
      },

      {
        controlName: "documentType", controlValue: null, placeholder: "Tipo del Documento", validators: [], class: "col-6", type: "select", optionValue: "id", optionLabel: "title", options: this.options
      },
      {
        controlName: "categoria", controlValue: null, placeholder: "Categoría del documento", validators: [], class: "col-6", type: "select", optionValue: "id", optionLabel: "title", options: this.options
      },
      {
        controlName: "clasificacion", controlValue: null, placeholder: "Clasificación del Documento", validators: [], class: "col-6", type: "select", optionValue: "id", optionLabel: "title", options: this.options
      },
      {
        controlName: "range", controlValue: null, placeholder: "", validators: [], class: "col-6", type: "range"
      },
      {
        controlName: "usuario", controlValue: null, placeholder: "Usuario", validators: [], class: "col-6", type: "text"
      },
      {
        controlName: "rol", controlValue: null, placeholder: "Rol", validators: [], class: "col-12", type: "text"
      },
      {
        controlName: "asunto", controlValue: null, placeholder: "Asunto", validators: [], class: "col-12", type: "text"
      },
      {
        controlName: "glosa", controlValue: null, placeholder: "Glosa", validators: [], class: "col-12", type: "text"
      },
      {
        controlName: "area", controlValue: null, placeholder: "Tipo de tarea", validators: [], class: "", type: "checkbox", optionValue: "id", optionLabel: "title", options: this.options
      },
    ]

    this.table.data = [{ checkbox: { label: "", value: "1" }, tareas: 'Validación', folio: '2020-1345-temp', documento: { realizador: "ANDREA MARIN", creacion: '20/09/2020', asunto: 'Lorem ipsum dolor sit ament' } },
    { checkbox: { label: "", value: "1" }, tareas: 'Aprobación', folio: '2020-1345-temp', documento: { realizador: "ANDREA MARIN", creacion: '20/09/2020', asunto: 'Lorem ipsum dolor sit ament' } },
    ]

    const loggedin: fromLoggedin.Loggedin = {
      view: this.view
    }
    this.store.dispatch(new fromLoggedin.Change(loggedin));
  }



}
