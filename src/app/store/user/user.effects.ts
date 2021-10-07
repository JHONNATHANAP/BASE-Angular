import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { apiUrls } from "@app/const";
import { NotificationService } from "@app/services";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, switchMap, tap, map } from "rxjs/operators";
import * as fromActions from './user.actions';
import { UserResponse } from "./user.models";



type Action = fromActions.All;

@Injectable()
export class UserEffects {

  constructor(
    private actions: Actions,
    private router: Router,
    private httpClient: HttpClient,
    private notification: NotificationService
  ) { }

  signUpEmail: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGN_UP_EMAIL),
      map((action: fromActions.SignUpEmail) => action.user),
      switchMap(userData =>

        this.httpClient.post<UserResponse>(`${apiUrls.api}/api/Usuario/Registrar`, userData)
          .pipe(
            tap((response: UserResponse) => {
              localStorage.setItem('token', response.token);
              this.router.navigate(['/']);
            }),
            map((response: UserResponse) => new fromActions.SignUpEmailSuccess(response.id, response || null)),
            //catchError(err => of(new fromActions.SignUpEmailError(err.message)))

            catchError(err => {

              this.notification.error("Errores al registrar nuevo usuario");
              return of(new fromActions.SignUpEmailError(err.message))

            })


          )
      )
    )
  );


  signInEmail: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGIN_IN_EMAIL),
      map((action: fromActions.SignInEmail) => action.credentials),
      switchMap(credentials =>
        this.httpClient.post<UserResponse>(apiUrls.api + apiUrls.login, credentials)
          .pipe(
            tap((response: UserResponse) => {
             // console.log(response)
              localStorage.setItem('token', response.token);
              this.router.navigate(['/']);
            }),
            map((response: UserResponse) => new fromActions.SignInEmailSuccess(response.id, response || null)),
            //catchError(err => of(new fromActions.SignInEmailError(err.message)))
            catchError(err => {
             // console.log(err)
              this.notification.error(err.status == 0 ? "Error desconocido" : "Credenciales incorrectas");
              return of(new fromActions.SignInEmailError(err.message))

            })

          )
      )
    )
  );




}
