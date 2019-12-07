import { initialState, sampleReducer } from '../reducers';
import { fetchGithubUsers, fetchGithubUsersSuccess, fetchGithubUsersError } from '../actions';
import { GithubUser } from '../types';

describe('SampleReducer', () => {
  it('Should handle fetching github users', () => {
    expect(sampleReducer(initialState, fetchGithubUsers())).toEqual({
      ...initialState,
      loading: true
    });
  });

  it('Should handle all data successfully fetch users', () => {
    const fakeGithubUsers: GithubUser[] = [{ login: 'login name', id: 1, url: 'url' }];
    expect(sampleReducer(initialState, fetchGithubUsersSuccess(fakeGithubUsers))).toEqual({
      ...initialState,
      loaded: true,
      data: fakeGithubUsers
    });
  });

  it('Should handle error', () => {
    expect(sampleReducer(initialState, fetchGithubUsersError('Error'))).toEqual({
      ...initialState,
      errors: 'Error'
    });
  });
});
