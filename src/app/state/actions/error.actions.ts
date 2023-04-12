import { createAction, props } from '@ngrx/store';

export const loadErrors = createAction(
  '[Error] Load Errors'
);

export const loadErrorsSuccess = createAction(
  '[Error] Load Errors Success',
  props<{ data: any }>()
);

export const loadErrorsFailure = createAction(
  '[Error] Load Errors Failure',
  props<{ error: any }>()
);
