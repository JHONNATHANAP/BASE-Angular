import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { dummyOptions } from '@app/const';
import { UtilsService } from '@app/pages/loggedin/utils/utils.service';
@Component({
  selector: 'app-new-requirement',
  templateUrl: './new-requirement.component.html',
  styleUrls: ['./new-requirement.component.scss']
})
export class NewRequirementComponent implements OnInit {


  options = dummyOptions;
  controls: any[] = []

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {

    this.controls = [
      {
        controlName: "requirementType", controlValue: null, placeholder: "Tipo de Requerimiento", validators: [Validators.required], class: "col-6", type: "select", optionValue: "id", optionLabel: "title", options: this.options
      },

      {
        controlName: "purchaseType", controlValue: null, placeholder: "Tipo de Compra", validators: [], class: "col-6", type: "select", optionValue: "id", optionLabel: "title", options: this.options
      },
      {
        controlName: "category", controlValue: null, placeholder: "Categoría de Requerimiento", validators: [], class: "col-6", type: "select", optionValue: "id", optionLabel: "title", options: this.options
      },
      {
        controlName: "adquisicionType", controlValue: null, placeholder: "Tipo del Adquisición", validators: [], class: "col-6", type: "select", optionValue: "id", optionLabel: "title", options: this.options
      },
      {
        controlName: "moneyType", controlValue: null, placeholder: "Tipo de Moneda", validators: [], class: "col-12", type: "select"
      },
      {
        controlName: "purchaseName", controlValue: null, placeholder: "Nombre de compra", validators: [], class: "col-6", type: "area", rows: "3"
      },
      {
        controlName: "specification", controlValue: null, placeholder: "Especificaciones Técnicas", validators: [], class: "col-6", type: "area", rows: "3"
      },
      {
        controlName: "objetive", controlValue: null, placeholder: "Objetivo", validators: [], class: "col-6", type: "area", rows: "3"
      },
      {
        controlName: "recomendation", controlValue: null, placeholder: "Recomendación", validators: [], class: "col-6", type: "area", rows: "3"
      },
      {
        controlName: "variation", controlValue: null, placeholder: "Glosa", validators: [], class: "", type: "indicators"
      },
      {
        controlName: "ejecution", controlValue: null, placeholder: "% Ejecución", validators: [], class: "", type: "indicators"
      },
      {
        controlName: "deliveries", controlValue: null, placeholder: "Entregas", validators: [], class: "", type: "indicators"
      },
    ]

    this.utils.initView('newrequirement');
  }
  onSubmit(event: any) {
    console.log(event)
  }
}
