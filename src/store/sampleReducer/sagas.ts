import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

// utils
import api from 'utils/api';

// local
import { SampleReducerActionTypes } from './types';
import { fetchGithubUsersError, fetchGithubUsersSuccess } from './actions';

function* handleFetch() {
  try {
    const res = yield call(api, 'get', 'users');

    if (res.error) {
      yield put(fetchGithubUsersError(res.error));
    } else {
      yield put(fetchGithubUsersSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchGithubUsersError(err.stack));
    } else {
      yield put(fetchGithubUsersError('An unknown error occurred.'));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(SampleReducerActionTypes.FETCH_REQUEST, handleFetch);
}

function* sampleSaga() {
  yield all([fork(watchFetchRequest)]);
}

export { sampleSaga };
