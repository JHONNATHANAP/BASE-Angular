import {ActionReducerMap,createFeatureSelector} from '@ngrx/store';
import * as fromLoggedin from './loggedin';



export interface State {
  loggedin: fromLoggedin.LoggedinState;

}

export const reducers: ActionReducerMap<State> = {
  loggedin: fromLoggedin.reducer

};
export const getLoggedinState= createFeatureSelector<State>('loggedin');