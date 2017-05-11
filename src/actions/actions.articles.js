import * as types from './types';
import axios from 'axios';

import {ROOT} from '../../config';


// Action creator for geting all the articles
export function getArticles (){
    return function (dispatch) {
        dispatch(getArticlesRequest());
        axios
            .get(`${ROOT}/articles`)
            .then(res => {
                dispatch(getArticlesSuccess(res.data.articles));
            })
            .catch(err => {
                dispatch(getArticlesError(err));
            });
    };
}

export function getArticlesRequest () {
    return {
        type: types.GET_ARTICLES_REQUEST
    };
}

export function getArticlesSuccess (articles) {
    return {
        type: types.GET_ARTICLES_SUCCESS,
        payload: articles
    };
}

export function getArticlesError (err) {
    return {
        type: types.GET_ARTICLES_ERROR,
        payload: err
    };
}

// Action creator for geting a single article by id
export function getArticle (id){
    return function (dispatch) {
        dispatch(getArticleRequest(id));
        axios
            .get(`${ROOT}/articles/`)
            .then(res => {
                dispatch(getArticleSuccess(res.data.articles.filter(
                    (article) => {
                        return article._id === id;
                    }
                )))
            })
            .catch(err => {
                dispatch(getArticleError(err));
            })
    };
}

export function getArticleRequest () {
    return {
        type: types.GET_ARTICLE_REQUEST
    };
}

export function getArticleSuccess (article) {
    return {
        type: types.GET_ARTICLE_SUCCESS,
        payload: article
    };
}

export function getArticleError (err) {
    return {
        type: types.GET_ARTICLE_ERROR,
        payload: err
    };
}

// Action creator for voting articles
export function voteArticle (id, vote) {
    return function (dispatch) {
        dispatch(voteArticleRequest());
        axios.put(`${ROOT}/articles/${id}?vote=${vote}`)
        .then((res) => {
            dispatch(voteArticleSuccess(res.data));
        })
        .catch((error) => {
            dispatch(voteArticleError(error.message));
        });        
    };
}

function voteArticleRequest () {
    return {
        type: types.VOTE_ARTICLE_REQUEST
    };
}

function voteArticleSuccess (votes) {
    return {
        type: types.VOTE_ARTICLE_SUCCESS,
        payload: votes
    };
}

function voteArticleError (error) {
    return {
        type: types.VOTE_ARTICLE_ERROR,
        error
    };
}