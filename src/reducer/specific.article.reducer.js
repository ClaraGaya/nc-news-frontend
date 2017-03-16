import * as types from '../actions/types';

const initialState = {
    data: [],
    loading: true,
    error: null
};

function reducerSpecificArticle ( prevState = initialState, action) {
    const newState = Object.assign({}, prevState)
    
    if (action.type === types.FETCH_ARTICLE_REQUEST) {
        newState.loading = true;
    }

    if (action.type === types.FETCH_ARTICLE_SUCCESS) {
        newState.data = action.data;
        newState.loading = false;
    }

    if (action.type === types.FETCH_ARTICLE_ERROR) {
        newState.error = action.err;
        newState.loading = false;
    }

    return newState;
}


export default reducerSpecificArticle;