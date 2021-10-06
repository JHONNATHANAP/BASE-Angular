import { Component, OnInit } from '@angular/core';
import { View } from '@app/models/frontend';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/pages/loggedin/store';
import * as fromLoggedin from '@app/pages/loggedin/store/loggedin';
import { TableModel } from '@app/shared/tables/table/table.component';
@Component({
  selector: 'app-recently-visited',
  templateUrl: './recently-visited.component.html',
  styleUrls: ['./recently-visited.component.scss']
})
export class RecentlyVisitedComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) { }
  view: View = {
    title: "Visitados Recientemente",
    icon: { class: "material-icons-outlined icons md-36", name: "visibility" }
  };

  table: TableModel = {
    columns: [
    
      {
        columnDef: 'tareas',
        header: 'Estado'
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
    data: [
      {  tareas: 'Validación', folio: '2020-1345-temp', documento: { realizador: "ANDREA MARIN", creacion: '20/09/2020', asunto: 'Lorem ipsum dolor sit ament' }, acciones: '' },
      { tareas: 'Aprobación', folio: '2020-1345-temp', documento: { realizador: "ANDREA MARIN", creacion: '20/09/2020', asunto: 'Lorem ipsum dolor sit ament' }, acciones: '' },

    ]
  }

  
  table2: TableModel = {
    columns: [
    
      {
        columnDef: 'detalle',
        header: 'Detalle feriado Legal'
      }
  
    ],
    data: [
      {  detalle:""}

    ]
  }
  detalle={
    disponibles:"12",
    fechaDesde:"24/06/2021",
    fechaHasta:"25/07/2021",
    solicitados:"5"

  }
  ngOnInit(): void {
    const loggedin: fromLoggedin.Loggedin = {
      view: this.view
    }
    this.store.dispatch(new fromLoggedin.Change(loggedin));
  }

}
