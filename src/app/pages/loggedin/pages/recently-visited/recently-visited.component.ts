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
        columnFilter: 'tareas',
        header: 'Estado',
        type: 'text',
      },
      {
        columnDef: 'folio',
        columnFilter: 'tareas',
        header: 'Folio',
        type: 'text',
      },
      {
        columnDef: 'documento',
        columnFilter: 'tareas',
        header: 'Documento',
        type: 'list',
      },
      {
        columnDef: 'acciones',
        columnFilter: 'tareas',
        header: 'Acciones',
        type: 'actions',
      }
    ],
    data: [
      { tareas: 'Validación', folio: '2020-1345-temp', documento: { title: "SOLICITUD RRHH", data: [{ title: "Realizador: ", content: "ANDREA MARIN" }, { title: "creación: ", content: "20/09/2020" }, { title: "asunto: ", content: "Lorem ipsum dolor sit ament" }] } },
      { tareas: 'Aprobación', folio: '2020-1345-temp', documento: { title: "SOLICITUD RRHH", data: [{ title: "Realizador: ", content: "ANDREA MARIN" }, { title: "creación: ", content: "20/09/2020" }, { title: "asunto: ", content: "Lorem ipsum dolor sit ament" }] } },
    ],
    actions: [
      { title: "Completar tarea", event: 'completeTask' },
      { title: "Ver archivo", event: 'showFile' },
      { title: "Ir a documento", event: 'goToFile' },
    ],
    paginator:true
  }


  table2: TableModel = {
    columns: [

      {
        columnDef: 'detalle',
        columnFilter: 'checkbox',
        header: 'Detalle feriado Legal',
        type: 'list',
      }

    ],
    data: [
      { detalle:  {  data: [{ title: "Días disponibles: ", content: "12" }, { title: "Fecha desde: ", content: "24/06/2021" }, { title: "Fecha hasta: ", content: "25/07/2021" }, { title: "Solicitados: ", content: "5" }] } }
    ],
    paginator:false
  }

  ngOnInit(): void {
    this.utils.initView('recentlyvisited');
  }
  onAction(event?: any) {
    console.log(event)
  }

}
