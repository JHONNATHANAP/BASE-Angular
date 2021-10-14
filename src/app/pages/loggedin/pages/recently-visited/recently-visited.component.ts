import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@app/pages/loggedin/utils/utils.service';
import { TableModel } from '@app/shared/tables/table/table.component';
@Component({
  selector: 'app-recently-visited',
  templateUrl: './recently-visited.component.html',
  styleUrls: ['./recently-visited.component.scss']
})
export class RecentlyVisitedComponent implements OnInit {

  constructor(private utils: UtilsService) { }

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
    this.utils.initView('recentlyvisited');
  }

}
