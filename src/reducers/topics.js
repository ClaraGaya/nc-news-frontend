import * as types from '../actions/types';

const initialState = {
  data: [],
  loading: false,
  error: null
};

export function reducerTopics (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  
  if (action.type === types.GET_TOPICS_REQUEST) {
    newState.loading = true;
    newState.error = null;
  }

  if (action.type === types.GET_TOPICS_SUCCESS) {
    newState.data = action.data;
    newState.loading = false;
    newState.error = null;
  }

  if (action.type === types.GET_TOPICS_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }


  return newState;
}

