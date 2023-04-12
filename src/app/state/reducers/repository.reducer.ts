import { createReducer, on } from '@ngrx/store';
import * as RepositoryActions from '../actions/repository.actions';
import { Repository } from 'src/app/models/repository.model';

export const repositoryFeatureKey = 'repository';

export enum RepositoriesStateEnum {
  LOADING ='Loading',
  SUCCESS ='Success',
  ERROR ='Error',
}

export interface RepositoryState {
  repositories: Repository[];
  repository: Repository | null;
  dataState: RepositoriesStateEnum | null;
  errorMessage: string | null;
}

export const initialState: RepositoryState = {
  repositories : [],
  repository : null,
  dataState: null,
  errorMessage: null
};

export const repositoryReducer = createReducer(
  initialState,
  on(RepositoryActions.loadRepositories, state => ({ ...state, dataState: RepositoriesStateEnum.LOADING})),
  on(RepositoryActions.loadRepositoriesSuccess, (state, { data }) => ({ ...state, dataState: RepositoriesStateEnum.SUCCESS, repositories: data})),
  on(RepositoryActions.loadRepositoriesFailure, (state, { error }) => ({...state, dataState: RepositoriesStateEnum.ERROR,  errorMessage: error})),

  on(RepositoryActions.loadRepository, state => ({ ...state, dataState: RepositoriesStateEnum.LOADING})),
  on(RepositoryActions.loadRepositorySuccess, (state, { data }) => ({ ...state, dataState: RepositoriesStateEnum.SUCCESS, repository: data})),
  on(RepositoryActions.loadRepositoryFailure, (state, { error }) => ({...state, dataState: RepositoriesStateEnum.ERROR,  errorMessage: error})),
);

