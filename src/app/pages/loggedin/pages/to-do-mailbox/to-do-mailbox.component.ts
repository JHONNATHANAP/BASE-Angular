import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { TableModel } from '@app/shared/tables/table/table.component';
import { UtilsService } from '@app/pages/loggedin/utils/utils.service';
import { dummyOptions } from '@app/const';

@Component({
  selector: 'app-to-do-mailbox',
  templateUrl: './to-do-mailbox.component.html',
  styleUrls: ['./to-do-mailbox.component.scss']
})
export class ToDoMailboxComponent implements OnInit {

  options: any = dummyOptions
  controls: any[] = [];
  table!: TableModel;

  constructor(private utils: UtilsService) { }

  onAction(event?: any){
    console.log(event)
  }
  onSubmit(event?: any){
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

    this.table = {
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

    this.table.data = [
      { checkbox: { label: "", value: "1" }, tareas: 'Validación', folio: '2020-1345-temp', documento: { realizador: "ANDREA MARIN", creacion: '20/09/2020', asunto: 'Lorem ipsum dolor sit ament' } },
      { checkbox: { label: "", value: "1" }, tareas: 'Aprobación', folio: '2020-1345-temp', documento: { realizador: "ANDREA MARIN", creacion: '20/09/2020', asunto: 'Lorem ipsum dolor sit ament' } },
    ]

    this.utils.initView('todomailbox')
  }



}
