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


  signInEmail: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGIN_IN_EMAIL),
      map((action: fromActions.SignInEmail) => action.credentials),
      switchMap(credentials =>
        this.httpClient.post<UserResponse>(apiUrls.api + apiUrls.login, credentials, { observe: 'response' })
          .pipe(
            tap((response: any) => {
              localStorage.setItem('token', response.headers.get('Authorization'));
              this.router.navigate(['/in/profiles']);
              this.notification.success("Bienvenido");
            }),
            map((response: UserResponse) => new fromActions.SignInEmailSuccess(response || null)),
            catchError(err => {
              console.log(err)
              this.notification.error(err.status == 0 ? "Error desconocido" : "Credenciales incorrectas");
              return of(new fromActions.SignInEmailError(err.message))

            })

          )
      )
    )
  );




}
