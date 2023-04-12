import { createReducer, on } from '@ngrx/store';
import * as ErrorActions from './error.actions';

export const errorFeatureKey = 'error';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

