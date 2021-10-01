import { templateJitUrl } from '@angular/compiler';
import {createSelector, createFeatureSelector} from '@ngrx/store';
import {LoggedinState} from './loggedin.reducer';
import { State,getLoggedinState} from '../index';

export const getState = createSelector(
  getLoggedinState,
  (state: State) => state.loggedin
)


export const getLoggedin = createSelector(
  getState,
 (state:LoggedinState)  => state.loggedin
)

export const getLoading = createSelector(
  getState,
  (state)  => state.loading
 )

export const getIsReady = createSelector(
  getState,
  (state) => state.loggedin && !state.loading
)

