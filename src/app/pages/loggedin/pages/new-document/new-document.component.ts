import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { dummyOptions } from '@app/const';
import * as fromRoot from '@app/pages/loggedin/store';
import { UtilsService } from '@app/pages/loggedin/utils/utils.service';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.scss']
})
export class NewDocumentComponent implements OnInit {
  form !: FormGroup;


  options = dummyOptions;

  constructor(private utils: UtilsService,private store: Store<fromRoot.State>,
    private fb: FormBuilder,) { }

  ngOnInit(): void {

    this.form = this.fb.group({
     
      documentType: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      categoria: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      clasificacion: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      materia: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      glosa: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      file: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
    })


    this.utils.initView('newdocument');
  }
  onSubmit() {

  }


}
