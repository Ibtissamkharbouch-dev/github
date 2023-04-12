import { createAction, props } from '@ngrx/store';
import { Repository } from 'src/app/models/repository.model';

export enum RepositoryActionsTypes {

  /* Load Repositories */
  LOAD_REPOSITORIES = '[Repository] Load Repositories',
  LOAD_REPOSITORIES_SUCCESS = '[Repository] Load Repositories Success',
  LOAD_REPOSITORIES_ERROR = '[Repository] Load Repositories Failure',

  /* Load Repository */
  LOAD_REPOSITORY = '[Repository] Load Repository',
  LOAD_REPOSITORY_SUCCESS = '[Repository] Load Repository Success',
  LOAD_REPOSITORY_ERROR = '[Repository] Load Repository Failure',
}

export const loadRepositories = createAction(
  RepositoryActionsTypes.LOAD_REPOSITORIES,
   props<{ login: string }>()
);

export const loadRepositoriesSuccess = createAction(
  RepositoryActionsTypes.LOAD_REPOSITORIES_SUCCESS,
  props<{ data: Repository[] }>()
);

export const loadRepositoriesFailure = createAction(
  RepositoryActionsTypes.LOAD_REPOSITORIES_ERROR,
  props<{ error: any }>()
);

export const loadRepository = createAction(
  RepositoryActionsTypes.LOAD_REPOSITORY,
   props<{ login: string, repository: string }>()
);

export const loadRepositorySuccess = createAction(
  RepositoryActionsTypes.LOAD_REPOSITORY_SUCCESS,
  props<{ data: Repository }>()
);

export const loadRepositoryFailure = createAction(
  RepositoryActionsTypes.LOAD_REPOSITORY_ERROR,
  props<{ error: any }>()
);
