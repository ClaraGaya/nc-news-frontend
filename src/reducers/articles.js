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

export function getTopArticles (articles, num) {
    return Object.keys(articles.byId).reduce(function (acc, id) {
        return acc.concat(articles.byId[id]);
    }, []).sort(function (a, b) {
        return b.votes - a.votes;
    }).slice(0, num);
}

export function reducerArticles (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.GET_ARTICLES_REQUEST) {
    newState.loading = true;
    newState.error = null;
  }

  if (action.type === types.GET_ARTICLES_SUCCESS) {
    newState.byId = action.payload;
    newState.loading = false;
    newState.error = null;
    newState.byId = normaliseData(action.payload);    
  }

  if (action.type === types.GET_ARTICLES_ERROR) {
    newState.error = action.payload;
    newState.loading = false;
  }
  if (action.type === types.VOTE_ARTICLE_REQUEST) {
    newState.loading = true;
    newState.error = null;
  }
  if (action.type === types.VOTE_ARTICLE_SUCCESS) {
    const id = action.payload._id;
    newState.loading = false;
    newState.byId = Object.assign({}, prevState.byId);
    newState.byId[id] = Object.assign({}, newState.byId[id], action.payload);
  }
  if (action.type === types.VOTE_ARTICLE_ERROR) {
    newState.loading = false;
  }


  return newState;
}

