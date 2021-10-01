import { Action } from "@ngrx/store";
import {Loggedin} from './loggedin.models';

export enum Types {
    CHANGE = '[Loggedin] Change: Success',
    READ = '[Loggedin] Change: Success'
}

export class Change implements Action {
  readonly type = Types.CHANGE;
  constructor(public loggedin: Loggedin ){}
}
export class Read implements Action {
  readonly type = Types.READ;
  constructor( ){}
}

/* export class ChangeSuccess implements Action {
  readonly type = Types.CHANGE_SUCCESS;
  constructor(public loggedin: Loggedin){}
}

export class ChangeError implements Action {
  readonly type = Types.CHANGE_ERROR;
  constructor(public error: string){}
} */

export type All = Change | Read;
