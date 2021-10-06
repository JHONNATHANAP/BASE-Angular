import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { View } from '@app/models/frontend';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/pages/loggedin/store';
import * as fromLoggedin from '@app/pages/loggedin/store/loggedin';
@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss']
})
export class NewDetailComponent implements OnInit {
  view: View = {
    title: "Ingreso Detalle",
    icon: { class: "material-icons-outlined icons md-36", name: "open_in_new" }
  };

  form !: FormGroup;
  diasDisponibles:number=15;
  diasSolicitados:number=15;
  constructor(private store: Store<fromRoot.State>,
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

    const loggedin: fromLoggedin.Loggedin = {
      view: this.view
    }
    this.store.dispatch(new fromLoggedin.Change(loggedin));
  }
  onSubmit() {

  }

}
