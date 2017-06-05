import * as types from '../actions/types';
import _ from 'underscore';

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

export function getTopComments (comments, num) {
    return Object.keys(comments.byId).reduce(function (acc, id) {
        return acc.concat(comments.byId[id]);
    }, []).sort(function (a, b) {
        return b.votes - a.votes;
    }).slice(0, num);
}

function getComments (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.GET_COMMENTS_REQUEST) {
    newState.loading = true;
    newState.error = null;
  }

  if (action.type === types.GET_COMMENTS_SUCCESS) {
    newState.byId = action.payload;
    newState.loading = false;
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

  if (action.type === types.ADD_COMMENT_REQUEST) {
    newState.loading = true;
    newState.error = null;
    return newState;
  }

  if (action.type === types.ADD_COMMENT_SUCCESS) {
    newState.loading = false;
    const id = action.payload._id;
    newState.byId[id] = Object.assign({}, newState.byId[id], action.payload);
  }

  if (action.type === types.ADD_COMMENT_ERROR) {
    newState.error = action.payload;
    newState.loading = false;
  }

  if (action.type === types.REMOVE_COMMENT_REQUEST) {
    newState.error = action.payload;
    newState.loading = true;
    return newState;
  }

  if (action.type === types.REMOVE_COMMENT_SUCCESS) {
    newState.loading = false;
    newState.byId = normaliseData(_.filter(prevState.byId, (item, i) => {
      return item._id !== action.payload;
    }))
    return newState;
  }

  if (action.type === types.REMOVE_COMMENT_ERROR) {
    newState.error = action.payload;
    newState.loading = false;
  }

  return newState;
}

export default getComments;
