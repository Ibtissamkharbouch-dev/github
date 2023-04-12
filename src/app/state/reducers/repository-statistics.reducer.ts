import { createReducer, on } from '@ngrx/store';
import * as RepositoryStatisticsActions from './repository-statistics.actions';

export const repositoryStatisticsFeatureKey = 'repositoryStatistics';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

