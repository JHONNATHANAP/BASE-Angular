import { Component, OnInit } from '@angular/core';
import { View } from '@app/models/frontend';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store';
import * as fromLoggedin from '../../store/loggedin';
@Component({
  selector: 'app-detail-requirement',
  templateUrl: './detail-requirement.component.html',
  styleUrls: ['./detail-requirement.component.scss']
})
export class DetailRequirementComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) { }

  requirenment = {
    title: "Solicitud RRHH Registro Asistencia",
    imagen: "",
    estado: "En tramitación",
    materia: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    glosa: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    autor: "Lorem ipsum dolor sit amet, ",
    fechas: [{ date: "10/06/2021", title: "Creación" }, { date: "10/06/2021", title: "Aprobación" }]
  }

  view: View = {
    title: "Detalle de Solicitud",
    icon: { class: "material-icons-outlined icons md-36", name: "assignment" }
  };
  ngOnInit(): void {
    const loggedin: fromLoggedin.Loggedin = {
      view: this.view
    }
    this.store.dispatch(new fromLoggedin.Change(loggedin));
  }

}
