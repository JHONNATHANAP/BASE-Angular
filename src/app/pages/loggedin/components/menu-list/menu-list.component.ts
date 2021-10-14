import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { views } from '@app/const';
import { UserResponse } from '@app/store/user';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();

  @Input() isAuthorized !: boolean | null;
  @Input() user !: UserResponse | null;

  @Output() signOut = new EventEmitter<void>();
  options=views;

  constructor(public router: Router) { }

  ngOnInit(): void {
   
  }

  closeMenu(op:any): void{

    this.menuToggle.emit();
  }

  onSignOut(): void {
    this.signOut.emit();
  }

}
