import * as types from './types';
import axios from 'axios';

import {ROOT} from '../../config';


// Action creator for geting all the users
export function getUsers (username){
    return function (dispatch) {
        axios
            .get(`${ROOT}/users`)
            .then(res => {
                dispatch(getUsersSuccess(res.data.users));
            })
            .catch(err => {
                dispatch(getUsersError(err));
            });
    };
}

export function getUsersRequest () {
    return {
        type: types.GET_USERS_REQUEST
    };
}

export function getUsersSuccess (users) {
    return {
        type: types.GET_USERS_SUCCESS,
        payload: users
    };
}

export function getUsersError (err) {
    return {
        type: types.GET_USERS_ERROR,
        payload: err
    };
}


// Action creator for geting a single user by username
export function getUser (username){
    return function (dispatch) {
        dispatch(getUserRequest(username));
        axios
            .get(`${ROOT}/users/`)
            .then(res => {
                dispatch(getUserSuccess(res.data.users.filter(
                    (user) => {
                        return user.username === username;
                    }
                )))
            })
            .catch(err => {
                dispatch(getUserError(err));
            })
    };
}

export function getUserRequest () {
    return {
        type: types.GET_USER_REQUEST
    };
}

export function getUserSuccess (user) {
    return {
        type: types.GET_USER_SUCCESS,
        payload: user
    };
}

export function getUserError (err) {
    return {
        type: types.GET_USER_ERROR,
        payload: err
    };
}
