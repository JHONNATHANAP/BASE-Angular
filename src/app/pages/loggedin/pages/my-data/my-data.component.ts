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
      {estado:"En curso",rol:"Jefe de unidad",dias:"10",fechaInicio:"30/02/2020",fechaFin:"30/02/2020",acciones:'Finalizar'},
      {estado:"Finalizado",rol:"Jefe Administrativo",dias:"5",fechaInicio:"30/02/2020",fechaFin:"30/02/2020",acciones:'Renovar'}
    ]
  }

  table: TableModel = {
    columns: [
      {
        columnDef: 'estado',
        header: 'Estado'
      },
      {
        columnDef: 'rol',
        header: 'Rol'
      },
      {
        columnDef: 'dias',
        header: 'Días'
      },
      {
        columnDef: 'fechaInicio',
        header: 'Fecha Inicio'
      },
      {
        columnDef: 'fechaFin',
        header: 'Fecha Fin'
      },
      {
        columnDef: 'acciones',
        header: 'Acciones'
      }
    ],
    data:this.user.subrogancias
  }
  
  ngOnInit(): void {
    this.utils.initView('mydata');
  }

}
