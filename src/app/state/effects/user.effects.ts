import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GithubApiService } from 'src/app/services/github-api.service';
import { UserActionsTypes } from '../actions/user.actions';
import { exhaustMap, map, catchError, of } from 'rxjs';
import * as UserActions from '../actions/user.actions';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
              private githubApiService: GithubApiService,
              private router: Router) {}

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionsTypes.LOGIN_USER),
    exhaustMap((action: any) => {
      return this.githubApiService.getUserProfile(action.login)
      .pipe(
        map((user:User) => {
          this.githubApiService.loginUser();
          localStorage.setItem('login', user.login),
          this.router.navigate(['/user-profile']);
          return UserActions.loginUserSuccess({data:user})}),
        catchError((error) => of(UserActions.loginUserFailure(error)))
      )})
    )
  );

  loadFollowers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionsTypes.LOAD_FOLLOWERS),
    exhaustMap((action: any) => {
      return this.githubApiService.getUserfollowers(action.login)
      .pipe(
        map((followers:User[]) => {
          return UserActions.loadFollowersSuccess({data:followers})}),
        catchError((error) => of(UserActions.loadFollowersFailure(error)))
      )})
    )
  );

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionsTypes.LOAD_USER),
    exhaustMap((action: any) => {
      return this.githubApiService.getUserProfile(action.login)
      .pipe(
        map((user:User) => {
          this.router.navigate(['/user']);
          return UserActions.loadUserSuccess({data:user})}),
        catchError((error) => of(UserActions.loadUser(error)))
      )})
    )
  );
}
