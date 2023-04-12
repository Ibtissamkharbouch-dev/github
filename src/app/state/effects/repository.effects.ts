import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GithubApiService } from 'src/app/services/github-api.service';
import { RepositoryActionsTypes } from '../actions/repository.actions';
import { exhaustMap, map, catchError, of } from 'rxjs';
import * as RepositoryActions from '../actions/repository.actions';
import { Repository } from 'src/app/models/repository.model';



@Injectable()
export class RepositoryEffects {


  constructor(private actions$: Actions,
              private githubApiService: GithubApiService) {}

  loadRepositorys$ = createEffect(() => this.actions$.pipe(
    ofType(RepositoryActionsTypes.LOAD_REPOSITORIES),
    exhaustMap((action: any) => {
      return this.githubApiService.getUserRepositories(action.login)
      .pipe(
        map((repositories: Repository[]) => {
          console.log('success');
          return RepositoryActions.loadRepositoriesSuccess({data: repositories})}),
        catchError((error) => of(RepositoryActions.loadRepositoriesFailure(error)))
      )})
    )
  );

  loadRepository$ = createEffect(() => this.actions$.pipe(
    ofType(RepositoryActionsTypes.LOAD_REPOSITORY),
    exhaustMap((action: any) => {
      return this.githubApiService.getUserRepository(action.login, action.repository)
      .pipe(
        map((repository: Repository) => {
          console.log('success');
          return RepositoryActions.loadRepositorySuccess({data: repository})}),
        catchError((error) => of(RepositoryActions.loadRepositoryFailure(error)))
      )})
    )
  );
}
