import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as fromRoot from '@app/pages/loggedin/store';
import { UtilsService } from '@app/pages/loggedin/utils/utils.service';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss']
})
export class NewDetailComponent implements OnInit {


  form !: FormGroup;
  diasDisponibles:number=15;
  diasSolicitados:number=15;
  constructor(private utils: UtilsService,private store: Store<fromRoot.State>,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
     
      fechaDesde: [null, {
        updateOn: 'change',
        validators: [
        ]
      }],
      fechaHasta: [null, {
        updateOn: 'change',
        validators: [
        ]
      }]
    
    })

    this.utils.initView('newdetail');
  }
  onSubmit() {

  }

}
