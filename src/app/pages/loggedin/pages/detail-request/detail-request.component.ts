import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@app/pages/loggedin/utils/utils.service';
@Component({
  selector: 'app-detail-request',
  templateUrl: './detail-request.component.html',
  styleUrls: ['./detail-request.component.scss']
})
export class DetailRequestComponent implements OnInit {

  constructor(private utils: UtilsService) { }

  requirenment = {
    title: "Solicitud RRHH Registro Asistencia",
    imagen: "",
    estado: "En tramitación",
    materia: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    glosa: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    autor: "Lorem ipsum dolor sit amet, ",
    fechas: [{ date: "10/06/2021", title: "Creación" }, { date: "10/06/2021", title: "Aprobación" }]
  }

  ngOnInit(): void {
    this.utils.initView('detailrequest');
  }

}
