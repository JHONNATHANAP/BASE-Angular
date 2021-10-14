import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@app/pages/loggedin/utils/utils.service';
import { TableModel } from '@app/shared/tables/table/table.component';
@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent implements OnInit {

  constructor(private utils: UtilsService) { }
  user={
    name:"Karen Paola Brio Monicada",
    document:"12.992.212-9",
    email:"kbrioa@oatta.gov.cl",
    roles:[
      {name:"Jefe Depto Informatica"},
      {name:"Usuario abastecimiento"},
      {name:"Jefe Unidad Administrativa"}],
    subrogancias:[
      {estado:"En curso",rol:"Jefe de unidad",dias:"10",fechaInicio:"30/02/2020",fechaFin:"30/02/2020"},
      {estado:"Finalizado",rol:"Jefe Administrativo",dias:"5",fechaInicio:"30/02/2020",fechaFin:"30/02/2020"}
    ]
  }

  table: TableModel = {
    columns: [
      {
        columnDef: 'estado',
        columnFilter: 'estado',
        header: 'Estado',
        type:"text"
      },
      {
        columnDef: 'rol',
        columnFilter: 'rol',
        header: 'Rol',
        type:"text"
      },
      {
        columnDef: 'dias',
        columnFilter: 'dias',
        header: 'Días',
        type:"text"
      },
      {
        columnDef: 'fechaInicio',
        columnFilter: 'fechaInicio',
        header: 'Fecha Inicio',
        type:"text"
      },
      {
        columnDef: 'fechaFin',
        columnFilter: 'fechaFin',
        header: 'Fecha Fin',
        type:"text"
      },
      {
        columnDef: 'acciones',
        columnFilter: 'acciones',
        header: 'Acciones',
        type:"actions"
      }
    ],
    data:this.user.subrogancias,
    actions: [
      { title: "Completar tarea", event: 'completeTask' },
      { title: "Ver archivo", event: 'showFile' },
      { title: "Ir a documento", event: 'goToFile' },
    ]
  }
  
  ngOnInit(): void {
    this.utils.initView('mydata');
  }
  onAction(event?: any) {
    console.log(event)
  }

}
