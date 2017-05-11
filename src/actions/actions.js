import * as types from './types';
import axios from 'axios';

import {ROOT} from '../../config';


// Action creator for fetching topics
export function fetchAllTopics () {
    return function (dispatch) {
        dispatch(fetchTopicsRequest());
        axios
            .get(`${ROOT}/topics`)
            .then(res => {
                // do something with the response
                console.log(res.data)
                dispatch(fetchTopicsSuccess(res.data.topics));
            })
            .catch(err => {
                // do something with error
                dispatch(fetchTopicsError(err));
            });
    };
}

export function fetchTopicsRequest () {
    return {
        type: types.FETCH_TOPICS_REQUEST
    };
}

export function fetchTopicsSuccess (topics) {
    return {
        type: types.FETCH_TOPICS_SUCCESS,
        data: topics
    };
}

export function fetchTopicsError (err) {
    return {
        type: types.FETCH_TOPICS_ERROR,
        data: err
    };
}



// Action creator for fetching comments
export function fetchComments (id) {
    return function (dispatch) {
        dispatch(fetchCommentsRequest());
        axios.put(`${ROOT}/articles/${id}/comments`)
        .then((res) => {
            dispatch(fetchCommentsSuccess(res.data));
        })
        .catch((error) => {
            dispatch(fetchCommentsError(error.message));
        });        
    };
}

function fetchCommentsRequest () {
    return {
        type: types.FETCH_COMMENTS_REQUEST
    };
}

function fetchCommentsSuccess (data) {
    return {
        type: types.FETCH_COMMENTS_SUCCESS,
        data
    };
}

function fetchCommentsError (error) {
    return {
        type: types.FETCH_COMMENTS_ERROR,
        error
    };
}