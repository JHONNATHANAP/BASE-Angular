import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { menuOptions } from '@app/const';
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
  options=menuOptions;
  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(): void{
    this.menuToggle.emit();
  }

  onSignOut(): void {
    this.signOut.emit();
  }

}
