import { GithubUser } from 'types';

import { initialState, sampleReducer } from '../reducers';
import { getGithubUsersAction } from '../actions';

describe('SampleReducer', () => {
  it('Should handle fetching github users', () => {
    expect(sampleReducer(initialState, getGithubUsersAction.request())).toEqual({
      ...initialState,
      loading: true
    });
  });

  it('Should handle all data successfully fetch users', () => {
    const fakeGithubUsers: GithubUser[] = [{ login: 'login name', id: 1, url: 'url' }];
    expect(sampleReducer(initialState, getGithubUsersAction.success(fakeGithubUsers))).toEqual({
      ...initialState,
      loaded: true,
      data: fakeGithubUsers
    });
  });

  it('Should handle error', () => {
    expect(sampleReducer(initialState, getGithubUsersAction.failure('Error'))).toEqual({
      ...initialState,
      errors: 'Error'
    });
  });
});
