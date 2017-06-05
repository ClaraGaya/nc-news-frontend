import * as types from '../actions/types';

const initialState = {
    article: [],
    loading: true,
    error: null
};

export function reducerArticle ( prevState = initialState, action) {
    const newState = Object.assign({}, prevState)
    
    if (action.type === types.GET_ARTICLE_REQUEST) {
        newState.loading = true;
        newState.error = null;
    }

    if (action.type === types.GET_ARTICLE_SUCCESS) {
        newState.article = action.payload;
        newState.loading = false;
        newState.error = null;
    }

    if (action.type === types.GET_ARTICLE_ERROR) {
        newState.error = action.payload;
        newState.loading = false;
    }

    return newState;
}