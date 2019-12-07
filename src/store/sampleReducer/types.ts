// Response object for GET /users
export interface GithubUser {
  login: string;
  id: number;
  url: string;
}

// enum is better
export enum SampleReducerActionTypes {
  FETCH_REQUEST = '@@githubUser/FETCH_REQUEST',
  FETCH_SUCCESS = '@@githubUser/FETCH_SUCCESS',
  FETCH_ERROR = '@@githubUser/FETCH_ERROR'
}

interface FetchGithubUserRequest {
  type: SampleReducerActionTypes.FETCH_REQUEST;
}

interface FetchGithubUserSuccess {
  type: SampleReducerActionTypes.FETCH_SUCCESS;
  users: GithubUser[];
}

interface FetchGithubUserError {
  type: SampleReducerActionTypes.FETCH_ERROR;
  error: string;
}

export type SampleReducerAction =
  | FetchGithubUserRequest
  | FetchGithubUserSuccess
  | FetchGithubUserError;

// readonly to avoid assign again to the variable
export interface SampleReducerState {
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly data: GithubUser[];
  readonly errors?: string;
}
