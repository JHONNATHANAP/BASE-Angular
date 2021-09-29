import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.scss']
})
export class UserProfilesComponent implements OnInit {

  constructor() { }

  options=[
    {id:1,title:"Jefe de unidad administradora"},
    {id:2,title:"Jefe Dept. Informática"},
    {id:3,title:"Usuario Abastecimiento"},
  ]

  ngOnInit(): void {
  }

}
