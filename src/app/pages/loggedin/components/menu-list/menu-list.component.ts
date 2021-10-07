import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  activeRoute:string="";
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.activeRoute=this.router.url;
    console.log(this.router.url);
  }

  closeMenu(op:any): void{

    console.log(op['_element']['nativeElement']['pathname'],this.router.url)
    this.menuToggle.emit();
  }

  onSignOut(): void {
    this.signOut.emit();
  }

}
