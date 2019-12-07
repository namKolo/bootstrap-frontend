import { SampleReducerActionTypes, GithubUser, SampleReducerAction } from './types';

export const fetchGithubUsers = (): SampleReducerAction => ({
  type: SampleReducerActionTypes.FETCH_REQUEST
});

export const fetchGithubUsersSuccess = (users: GithubUser[]): SampleReducerAction => ({
  type: SampleReducerActionTypes.FETCH_SUCCESS,
  users
});

export const fetchGithubUsersError = (error: string): SampleReducerAction => ({
  type: SampleReducerActionTypes.FETCH_ERROR,
  error
});
