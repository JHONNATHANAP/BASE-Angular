import {Loggedin} from './loggedin.models';
import * as fromActions from './loggedin.actions';
import {Dictionary} from '@ngrx/entity';
import {min} from 'rxjs/operators';


export interface LoggedinState {
  loggedin: Loggedin | null;
  loading : boolean | null;
  error: string | null;
}

const initialState: LoggedinState = {
  loggedin: null,
  loading: null,
  error: null
}

export function reducer(state=initialState, action: fromActions.All | any) : LoggedinState {
    switch(action.type){

      case fromActions.Types.CHANGE: {
        console.log({...state, loading: true, error: null, loggedin: action.loggedin})
        return {...state, loading: true, error: null, loggedin: action.loggedin};
      }

      case fromActions.Types.READ: {
        console.log({...state, loading: false, error: null, loggedin: action})
        return {...state, loading: false, error: null, loggedin: action.loggedin};
      }

      default: {
        return state;
      }
    }
}
