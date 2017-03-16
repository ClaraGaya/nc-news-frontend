import * as types from '../actions/types';

const initialState = {
  data: [],
  loading: false,
  error: null
};

function reducerArticles (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  
  if (action.type === types.FETCH_ALL_ARTICLES_REQUEST) {
    newState.loading = true;
  }

  if (action.type === types.FETCH_ALL_ARTICLES_SUCCESS) {
    newState.data = action.data;
    newState.loading = true;
  }

  if (action.type === types.FETCH_ALL_ARTICLES_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }


  return newState;
}

export default reducerArticles;
