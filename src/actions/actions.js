import * as types from './types';
import axios from 'axios';

import {ROOT} from '../../config';

// Action creator for fetching articles
export function fetchAllArticles (){
    return function (dispatch) {
        dispatch(fetchAllArticlesRequest());
        axios
            .get(`${ROOT}/articles`)
            .then(res => {
                // do something with the response
                dispatch(fetchAllArticlesSuccess(res.data.articles));
            })
            .catch(err => {
                // do something with error
                dispatch(fetchAllArticlesError(err));
            })
    };
}

export function fetchAllArticlesRequest () {
    return {
        type: types.FETCH_ALL_ARTICLES_REQUEST
    };
}

export function fetchAllArticlesSuccess (articles) {
    return {
        type: types.FETCH_ALL_ARTICLES_SUCCESS,
        data: articles
    };
}

export function fetchAllArticlesError (err) {
    return {
        type: types.FETCH_ALL_ARTICLES_ERROR,
        data: err
    };
}


// Action creator for fetching one specific article
export function fetchArticle (id){
    console.log(id)
    return function (dispatch) {
        dispatch(fetchArticleRequest(id));
        axios
            .get(`${ROOT}/articles/`)
            .then(res => {
                // do something with the response

                dispatch(fetchArticleSuccess(res.data.articles.filter((article) => {
                    return article._id === id;
                }) 
                ));
            })
            .catch(err => {
                // do something with error
                dispatch(fetchArticleError(err));
            })
    };
}

export function fetchArticleRequest () {
    return {
        type: types.FETCH_ARTICLE_REQUEST
    };
}

export function fetchArticleSuccess (article) {
    return {
        type: types.FETCH_ARTICLE_SUCCESS,
        data: article
    };
}

export function fetchArticleError (err) {
    return {
        type: types.FETCH_ARTICLE_ERROR,
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



// Action creator for voting up and article
export function voteArticle (id, vote){
    return function (dispatch) {
        dispatch(voteArticleRequest());
        axios
            .put(`${ROOT}/articles/${id}?vote=${vote}`)
            then.(res => {
                // do something with the response
                dispatch(voteArticleSuccess(res.data));
            })
            .catch(err => {
                // do something with error
                dispatch(voteArticleError(err));
            })
    };
}

export function voteArticleRequest(){
    return {
        type: types.VOTE_ARTICLE_REQUEST
    }
}
export function voteArticleSuccess(){
    return {
        type: types.VOTE_ARTICLE_SUCCESS,
        data:data
    }
}
export function voteArticleError(){
    return {
        type: types.VOTE_ARTICLE_ERROR,
        data:err
    }
}