import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

// utils
import api from 'utils/api';

// local
import { getGithubUsersAction } from './actions';

function* handleFetch() {
  try {
    const res = yield call(api, 'get', 'users');

    if (res.error) {
      yield put(getGithubUsersAction.failure(res.error));
    } else {
      yield put(getGithubUsersAction.success(res));
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(getGithubUsersAction.failure(err.stack));
    } else {
      yield put(getGithubUsersAction.failure('An unknown error occurred.'));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(getGithubUsersAction.request, handleFetch);
}

function* sampleSaga() {
  yield all([fork(watchFetchRequest)]);
}

export { sampleSaga };
