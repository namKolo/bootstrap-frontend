import { Store, createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { sampleReducer, SampleReducerState, sampleSaga } from './sampleReducer';

// The top-level state object
export interface IApplicationState {
  sample: SampleReducerState;
}

// root reducers
const createRootReducer = () => combineReducers({ sample: sampleReducer });

// root saga
function* rootSaga() {
  yield all([fork(sampleSaga)]);
}

export function configureStore(initialState?: IApplicationState): Store<IApplicationState> {
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(createRootReducer(), initialState, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);
  return store;
}
