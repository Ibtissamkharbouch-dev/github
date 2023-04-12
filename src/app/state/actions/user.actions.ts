import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export enum UserActionsTypes {
  /* Login User */
  LOGIN_USER = '[User] Login User',
  LOGIN_USER_SUCCESS = '[User] Login User Success',
  LOGIN_USER_ERROR = '[User] Login User Failure',

  /* Load Followers */
  LOAD_FOLLOWERS = '[User] Load Followers',
  LOAD_FOLLOWERS_SUCCESS = '[User] Load Followers Success',
  LOAD_FOLLOWERS_ERROR = '[User] Load Followers Failure',

  /* Load user */
  LOAD_USER = '[User] Load User',
  LOAD_USER_SUCCESS = '[User] Load User Success',
  LOAD_USER_ERROR = '[User] Load User Failure',

  /* Logout User */
  LOGOUT_USER = '[User] Logout User',
}

/* Login User Actions */
export const loginUser = createAction(
  UserActionsTypes.LOGIN_USER,
  props<{ login: string }>()

);

export const loginUserSuccess = createAction(
  UserActionsTypes.LOGIN_USER_SUCCESS,
  props<{ data: User }>()
);

export const loginUserFailure = createAction(
  UserActionsTypes.LOGIN_USER_ERROR,
  props<{ error: string }>()
);

/* End Login User Actions */

/* Load Followers Actions */
export const loadFollowers = createAction(
  UserActionsTypes.LOAD_FOLLOWERS,
  props<{ login: string }>()
);

export const loadFollowersSuccess = createAction(
  UserActionsTypes.LOAD_FOLLOWERS_SUCCESS,
  props<{ data: User[] }>()
);

export const loadFollowersFailure = createAction(
  UserActionsTypes.LOAD_FOLLOWERS_ERROR,
  props<{ error: string }>()
);
/* End Load Followers Actions */

/* Load User Actions */
export const loadUser = createAction(
  UserActionsTypes.LOAD_USER,
  props<{ login: string }>()
);

export const loadUserSuccess = createAction(
  UserActionsTypes.LOAD_USER_SUCCESS,
  props<{ data: User }>()
);


export const loadUserFailure = createAction(
  UserActionsTypes.LOAD_USER_ERROR,
  props<{ error: string }>()
);
/* End Load User Actions */

/* Logout User Actions */
export const logoutUser = createAction(
  UserActionsTypes.LOGOUT_USER
);
/* End Logout User Actions */


