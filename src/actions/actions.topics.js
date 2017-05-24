import * as types from './types';
import axios from 'axios';

import {ROOT} from '../../config';


// Action creator for fetching topics
export function getTopics () {
    return function (dispatch) {
        dispatch(getTopicsRequest());
        axios
            .get(`${ROOT}/topics`)
            .then(res => {
                dispatch(getTopicsSuccess(res.data.topics));
            })
            .catch(err => {
                dispatch(getTopicsError(err));
            });
    };
}

export function getTopicsRequest () {
    return {
        type: types.GET_TOPICS_REQUEST
    };
}

export function getTopicsSuccess (topics) {
    return {
        type: types.GET_TOPICS_SUCCESS,
        data: topics
    };
}

export function getTopicsError (err) {
    return {
        type: types.GET_TOPICS_ERROR,
        data: err
    };
}

