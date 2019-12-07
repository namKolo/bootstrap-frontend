import { createReducer } from 'typesafe-actions';

// app types
import { GithubUser } from 'types';

// actions
import { getGithubUsersAction, SampleActionTypes } from './actions';

export interface SampleReducerState {
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly data: GithubUser[];
  readonly errors?: string;
}

export const initialState: SampleReducerState = {
  loading: false,
  loaded: false,
  data: [],
  errors: ''
};

const sampleReducer = createReducer<SampleReducerState, SampleActionTypes>(initialState)
  .handleAction(getGithubUsersAction.request, state => ({
    ...state,
    loading: true
  }))
  .handleAction(getGithubUsersAction.success, (state, action) => ({
    data: action.payload,
    errors: '',
    loaded: true,
    loading: false
  }))
  .handleAction(getGithubUsersAction.failure, (state, action) => ({
    loading: false,
    loaded: false,
    data: [],
    errors: action.payload
  }));

export { sampleReducer };
