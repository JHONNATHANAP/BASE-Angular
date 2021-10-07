import { Component, OnInit } from '@angular/core';
import { View } from '@app/models/frontend';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/pages/loggedin/store';
import * as fromLoggedin from '@app/pages/loggedin/store/loggedin';
@Component({
  selector: 'app-detail-requirement',
  templateUrl: './detail-requirement.component.html',
  styleUrls: ['./detail-requirement.component.scss']
})
export class DetailRequirementComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) { }

  requirenment = {
    tipo: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    categoria: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    tipoCompra: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    tipoAdquisicion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    moneda: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    nombreCompra: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    objetivo: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    especificaciones: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    recomendacion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    variacion: 3.5,
    ejecucion: 100,
    entregas: 5

  }

  view: View = {
    title: "Detalle de Requerimiento",
    icon: { class: "material-icons-outlined icons md-36", name: "assignment" }
  };
  ngOnInit(): void {
    const loggedin: fromLoggedin.Loggedin = {
      view: this.view
    }
    this.store.dispatch(new fromLoggedin.Change(loggedin));
  }

}
