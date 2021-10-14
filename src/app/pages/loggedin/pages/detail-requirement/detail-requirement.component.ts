import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@app/pages/loggedin/utils/utils.service';
@Component({
  selector: 'app-detail-requirement',
  templateUrl: './detail-requirement.component.html',
  styleUrls: ['./detail-requirement.component.scss']
})
export class DetailRequirementComponent implements OnInit {

  constructor(private utils: UtilsService) { }

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


  ngOnInit(): void {
    this.utils.initView('detailrequirement');
  }

}
