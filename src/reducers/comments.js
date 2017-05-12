import * as types from '../actions/types';

const initialState = {
  byId: {},
  loading: false,
  error: null
};

function normaliseData (data) {
    return data.reduce(function (acc, item) {
        acc[item._id] = item;
        return acc;
    }, {});
}

function getComments (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.GET_COMMENTS_SUCCESS) {
    newState.byId = action.payload;
    newState.loading = true;
    newState.byId = normaliseData(action.payload); 
  }

  if (action.type === types.GET_COMMENTS_ERROR) {
    newState.error = action.payload;
    newState.loading = false;
  }

  if (action.type === types.VOTE_COMMENT_SUCCESS) {
    const id = action.payload._id;
    newState.loading = false;
    newState.byId[id] = Object.assign({}, newState.byId[id], action.payload);
  }
  if (action.type === types.VOTE_COMMENT_ERROR) {
    newState.loading = false;
  }

  if (action.type === types.ADD_COMMENT_SUCCESS) {
    const id = action.payload._id;
    newState.byId[id] = Object.assign({}, newState.byId[id], action.payload);
  }

  if (action.type === types.ADD_COMMENT_ERROR) {
    newState.error = action.payload;
    newState.loading = false;
  }

  if (action.type === types.REMOVE_COMMENT_ERROR) {
    newState.error = action.payload;
    newState.loading = false;
  }

  return newState;
}

export default getComments;
