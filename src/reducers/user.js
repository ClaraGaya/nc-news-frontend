import * as types from '../actions/types';

const initialState = {
    user: [],
    loading: true,
    error: null
};

export function reducerUser ( prevState = initialState, action) {
    const newState = Object.assign({}, prevState)
    
    if (action.type === types.GET_USER_REQUEST) {
        newState.loading = true;
        newState.error = null;
    }

    if (action.type === types.GET_USER_SUCCESS) {
        newState.user = action.payload;
        newState.loading = false;
        newState.error = null;
    }

    if (action.type === types.GET_USER_ERROR) {
        newState.error = action.payload;
        newState.loading = false;
    }

    return newState;
}