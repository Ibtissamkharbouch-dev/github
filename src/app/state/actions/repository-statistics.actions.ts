import { createAction, props } from '@ngrx/store';

export const loadRepositoryStatisticss = createAction(
  '[RepositoryStatistics] Load RepositoryStatisticss'
);

export const loadRepositoryStatisticssSuccess = createAction(
  '[RepositoryStatistics] Load RepositoryStatisticss Success',
  props<{ data: any }>()
);

export const loadRepositoryStatisticssFailure = createAction(
  '[RepositoryStatistics] Load RepositoryStatisticss Failure',
  props<{ error: any }>()
);
