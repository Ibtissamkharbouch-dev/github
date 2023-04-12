import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { GithubApiService } from 'src/app/services/github-api.service';



@Injectable()
export class RepositoryStatisticsEffects {


  constructor(private actions$: Actions,
              private githubApiService: GithubApiService) {}
}
