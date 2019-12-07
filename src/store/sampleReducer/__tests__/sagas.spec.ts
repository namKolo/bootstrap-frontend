import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';

import api from 'utils/api';
import { sampleSaga } from '../sagas';
import { fetchGithubUsersSuccess, fetchGithubUsers } from '../actions';
import { GithubUser } from '../types';

describe('sample saga', () => {
  it('should handle successfully fetching sample', () => {
    const fakeGithubUsers: GithubUser[] = [{ id: 1, login: 'login', url: 'url' }];

    return expectSaga(sampleSaga)
      .provide([[call(api, 'get', 'users'), fakeGithubUsers]])
      .put(fetchGithubUsersSuccess(fakeGithubUsers))
      .dispatch(fetchGithubUsers())
      .run();
  });
});
