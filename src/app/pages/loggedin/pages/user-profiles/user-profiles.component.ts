import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@app/pages/loggedin/utils/utils.service';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.scss']
})
export class UserProfilesComponent implements OnInit {

  constructor(private utils: UtilsService) { }

  options = [
    { id: 1, title: "Jefe de unidad administradora" },
    { id: 2, title: "Jefe Dept. Informática" },
    { id: 3, title: "Usuario Abastecimiento" },
  ]

  ngOnInit(): void {
    this.utils.initView('profiles')
  }

}
