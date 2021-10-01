import { Component, OnInit } from '@angular/core';
import { View } from '@app/models/frontend';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store';
import * as fromLoggedin from '../../store/loggedin';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.scss']
})
export class UserProfilesComponent implements OnInit {
  view:View = {
    title: "Seleccione uno de los perfiles",
    icon:{class:"material-icons-outlined icons md-36",name:"person"}
  };
  constructor(private store: Store<fromRoot.State>) { }

  options = [
    { id: 1, title: "Jefe de unidad administradora" },
    { id: 2, title: "Jefe Dept. Informática" },
    { id: 3, title: "Usuario Abastecimiento" },
  ]

  ngOnInit(): void {
    const loggedin: fromLoggedin.Loggedin = {
      view:this.view
    }
    this.store.dispatch(new fromLoggedin.Change(loggedin));
  }

}
