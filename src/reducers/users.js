import * as types from '../actions/types';

const initialState = {
  byId: {},
  loading: false,
  error: null
};

export function normaliseData (data) {
    return data.reduce(function (acc, item) {
        acc[item._id] = item;
        return acc;
    }, {});
}

export function reducerUsers (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.GET_USERS_REQUEST) {
    newState.loading = true;
    newState.error = null;
  }

  if (action.type === types.GET_USERS_SUCCESS) {
    newState.byId = action.payload;
    newState.loading = false;
    newState.error = null;
    newState.byId = normaliseData(action.payload);    
  }

  if (action.type === types.GET_USERS_ERROR) {
    newState.error = action.payload;
    newState.loading = false;
  }


  return newState;
}

