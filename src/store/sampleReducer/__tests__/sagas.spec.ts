import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';

import { GithubUser } from 'types';
import api from 'utils/api';

import { sampleSaga } from '../sagas';
import { getGithubUsersAction } from '../actions';

describe('sample saga', () => {
  it('should handle successfully fetching sample', () => {
    const fakeGithubUsers: GithubUser[] = [{ id: 1, login: 'login', url: 'url' }];

    return expectSaga(sampleSaga)
      .provide([[call(api, 'get', 'users'), fakeGithubUsers]])
      .put(getGithubUsersAction.success(fakeGithubUsers))
      .dispatch(getGithubUsersAction.request())
      .run();
  });
});
