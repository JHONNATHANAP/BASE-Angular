import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/pages/loggedin/store';
import * as fromLoggedin from '@app/pages/loggedin/store/loggedin';
import { View } from '@app/models/frontend';
import { views } from '@app/const';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  views = views;

  constructor(private store: Store<fromRoot.State>) { }

  initView(viewName: string): void {

    var view = this.views.filter((e) => { return e.view == viewName })[0]


    const loggedin: fromLoggedin.Loggedin = {
      view: view
    }
    this.store.dispatch(new fromLoggedin.Change(loggedin));
  }
}
