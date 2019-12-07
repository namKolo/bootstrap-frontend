import { createAsyncAction, ActionType } from 'typesafe-actions';

import { GithubUser } from 'types';

export const getGithubUsersAction = createAsyncAction(
  '@githubUser/FETCH_ALL',
  '@githubUser/FETCH_SUCCESS',
  '@githubUser/FETCH_ERROR'
)<undefined, GithubUser[], string>();

export type SampleActionTypes = ActionType<typeof getGithubUsersAction>;
