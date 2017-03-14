import * as types from '../actions/types';

const initialState = {
  articles: [],
  selectedTopic: null
};

function reducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);


  return newState;
}

export default reducer;
