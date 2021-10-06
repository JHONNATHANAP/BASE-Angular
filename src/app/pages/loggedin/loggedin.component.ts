import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss']
})
export class LoggedinComponent implements OnInit {
  user$ !: Observable<fromUser.UserResponse>;
  isAuthorized$ !: Observable<boolean>;
  sideMode:MatDrawerMode='side';//'over','push'
  constructor(
    private store: Store<fromRoot.State>,
    private router: Router
 ){}

  ngOnInit(): void {
  }
  onSignOut():void {
    localStorage.removeItem('token');
    this.store.dispatch(new fromUser.SignOut());
    this.router.navigate(['/auth/login']);
  }
}
