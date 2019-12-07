import { Reducer } from 'redux';
import { SampleReducerState, SampleReducerAction, SampleReducerActionTypes } from './types';

const initialState: SampleReducerState = {
  loading: false,
  loaded: false,
  data: [],
  errors: ''
};

const sampleReducer: Reducer<SampleReducerState, SampleReducerAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SampleReducerActionTypes.FETCH_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case SampleReducerActionTypes.FETCH_SUCCESS: {
      return {
        loading: false,
        loaded: true,
        data: action.users,
        errors: ''
      };
    }

    case SampleReducerActionTypes.FETCH_ERROR: {
      return {
        loading: false,
        loaded: false,
        data: [],
        errors: action.error
      };
    }

    default:
      return state;
  }
};

export { sampleReducer };
