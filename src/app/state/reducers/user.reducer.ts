import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from 'src/app/models/user.model';

export const userFeatureKey = 'user';

export enum UsersStateEnum {
  LOADING ='Loading',
  SUCCESS ='Success',
  ERROR ='Error',
}

export interface UserState {
  connectedUser: User | null;
  followers: User[];
  user: User | null;
  dataState: UsersStateEnum | null;
  errorMessage: string | null;
}

export const initialState: UserState = {
  connectedUser : null,
  followers: [],
  user: null,
  dataState: null,
  errorMessage: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loginUser, state => ({ ...state, dataState: UsersStateEnum.LOADING})),
  on(UserActions.loginUserSuccess, (state, { data }) => ({ ...state, dataState: UsersStateEnum.SUCCESS, connectedUser: data})),
  on(UserActions.loginUserFailure, (state, { error }) => ({...state, dataState: UsersStateEnum.ERROR,  errorMessage: error})),
  on(UserActions.loadFollowers, state => ({ ...state, dataState: UsersStateEnum.LOADING})),
  on(UserActions.loadFollowersSuccess, (state, { data }) => ({ ...state, dataState: UsersStateEnum.SUCCESS, followers: data})),
  on(UserActions.loadFollowersFailure, (state, { error }) => ({...state, dataState: UsersStateEnum.ERROR,  errorMessage: error})),
  on(UserActions.loadUser, state => ({ ...state, dataState: UsersStateEnum.LOADING})),
  on(UserActions.loadUserSuccess, (state, { data }) => ({ ...state, dataState: UsersStateEnum.SUCCESS, user: data})),
  on(UserActions.loadUserFailure, (state, { error }) => ({...state, dataState: UsersStateEnum.ERROR,  errorMessage: error})),
  on(UserActions.logoutUser, state => ({ ...state}))
);

