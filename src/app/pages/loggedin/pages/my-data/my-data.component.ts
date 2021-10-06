import { Component, OnInit } from '@angular/core';
import { View } from '@app/models/frontend';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/pages/loggedin/store';
import * as fromLoggedin from '@app/pages/loggedin/store/loggedin';
import { TableModel } from '@app/shared/tables/table/table.component';
@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent implements OnInit {
  view: View = {
    title: "Mis datos",
    icon: { class: "material-icons-outlined icons md-36", name: "assignment_ind" }
  };

  constructor(private store: Store<fromRoot.State>) { }
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
    const loggedin: fromLoggedin.Loggedin = {
      view: this.view
    }
    this.store.dispatch(new fromLoggedin.Change(loggedin));
  }

}
