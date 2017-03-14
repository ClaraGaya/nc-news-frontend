import * as types from '../actions/types';

const initialState = {
  articles: [],
  selectedTopic: null
};

function reducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.FETCH_ARTICLES_SUCCESS) {
    newState.articles = action.data;
  }

  return newState;
}

export default reducer;
