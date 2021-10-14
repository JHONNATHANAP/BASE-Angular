import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { dummyOptions } from '@app/const';
import { UtilsService } from '@app/pages/loggedin/utils/utils.service';
@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.scss']
})
export class NewDocumentComponent implements OnInit {

  options = dummyOptions;
  controls: any[] = []

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {

    this.controls = [
      {
        controlName: "documentType", controlValue: null, placeholder: "Tipo del Documento", validators: [Validators.required], class: "col-12", type: "select", optionValue: "id", optionLabel: "title", options: this.options
      },

      {
        controlName: "categoria", controlValue: null, placeholder: "Categoría del documento", validators: [], class: "col-12", type: "select", optionValue: "id", optionLabel: "title", options: this.options
      },
      {
        controlName: "clasificacion", controlValue: null, placeholder: "Clasificación del Documento", validators: [], class: "col-12", type: "select", optionValue: "id", optionLabel: "title", options: this.options
      },
      {
        controlName: "materia", controlValue: null, placeholder: "Materia", validators: [], class: "col-12", type: "area", rows: "3"
      },
      {
        controlName: "glosa", controlValue: null, placeholder: "Glosa", validators: [], class: "col-12", type: "area", rows: "3"
      },
      {
        controlName: "file", controlValue: null, placeholder: "Seleccionar archivo", validators: [], class: "col-12", type: "file"
      },
    ]


    this.utils.initView('newdocument');
  }
  onSubmit(event: any) {
    console.log(event)
  }

}
