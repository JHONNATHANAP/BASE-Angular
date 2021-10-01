import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { View } from '@app/models/frontend';
import { UserResponse } from '@app/store/user';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store';
import * as fromLoggedin from '../../store/loggedin';
import { Loggedin } from '../../store/loggedin';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Output() menuClicked = new EventEmitter();
  @Input() isAuthorized !: boolean | null;
  @Input() user !: UserResponse | null;

  @Output() signOut = new EventEmitter<void>();
  loggedin$!: Observable<Loggedin>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
 
    this.loggedin$=this.store.pipe(select(fromLoggedin.getLoggedin))as Observable<Loggedin>;
  }

  onClicked() : void {
    this.menuClicked.emit();
  }

  onSignOut(): void {
    this.signOut.emit();
  }


}
