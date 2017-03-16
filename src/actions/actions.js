import * as types from './types';
import axios from 'axios';

import {ROOT} from '../../config';

// Action creator for fetching articles
export function fetchAllArticles (){
    return function (dispatch) {
        dispatch(fetchArticlesRequest());
        axios
            .get(`${ROOT}/articles`)
            .then(res => {
                // do something with the response
                dispatch(fetchArticlesSuccess(res.data.articles));
            })
            .catch(err => {
                // do something with error
                dispatch(fetchArticlesError(err));
            })
    };
}

export function fetchArticlesRequest () {
    return {
        type: types.FETCH_ARTICLES_REQUEST
    };
}

export function fetchArticlesSuccess (articles) {
    return {
        type: types.FETCH_ARTICLES_SUCCESS,
        data: articles
    };
}

export function fetchArticlesError (err) {
    return {
        type: types.FETCH_ARTICLES_ERROR,
        data: err
    };
}



// Action creator for fetching topics
export function fetchAllTopics (){
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
            })
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