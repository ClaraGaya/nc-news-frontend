import * as types from './types';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

import {ROOT} from '../../config';


// Action creator for fetching comments
export function getComments (id){
    return function (dispatch) {
        dispatch(getCommentsRequest());
        axios
            .get(`${ROOT}/articles/${id}/comments`)
            .then(res => {
                dispatch(getCommentsSuccess(res.data.comments));
            })
            .catch(err => {
                dispatch(getCommentsError(err));
            });
    };
}

export function getCommentsRequest () {
    return {
        type: types.GET_COMMENTS_REQUEST
    };
}

export function getCommentsSuccess (comments) {
    return {
        type: types.GET_COMMENTS_SUCCESS,
        payload: comments
    };
}

export function getCommentsError (err) {
    return {
        type: types.GET_COMMENTS_ERROR,
        payload: err
    };
}


// Action creator for voting comments
export function voteComment (articleId, id, vote) {
    return function (dispatch) {
        dispatch(voteCommentRequest());
        axios.put(`${ROOT}/comments/${id}?vote=${vote}`)
        .then((res) => {
            dispatch(getComments(articleId));
        })
        .catch((error) => {
            dispatch(voteCommentError(error.message));
        });        
    };
}

export function voteCommentRequest () {
    return {
        type: types.VOTE_COMMENT_REQUEST
    };
}

export function voteCommentSuccess (votes) {
    return {
        type: types.VOTE_COMMENT_SUCCESS,
        payload: votes
    };
}

export function voteCommentError (error) {
    return {
        type: types.VOTE_COMMENT_ERROR,
        payload: error
    };
}


// Action creator for adding comments
export function addComment (id, comment) {
    return function (dispatch) {
        dispatch(addCommentRequest());
        axios.post(`${ROOT}/articles/${id}/comments`, {"comment": comment})
        .then((res) => {
            dispatch(addCommentSuccess(res.data.comment));
        })
        .catch((error) => {
            dispatch(addCommentError(error.message));
        });        
    };
}

export function addCommentRequest () {
    return {
        type: types.ADD_COMMENT_REQUEST
    };
}

export function addCommentSuccess (comment) {
    return {
        type: types.ADD_COMMENT_SUCCESS,
        payload: comment
    };
}

export function addCommentError (error) {
    return {
        type: types.ADD_COMMENT_ERROR,
        payload: error
    };
}

// Action creator for removing comments
export function removeComment (commentId, articleId) {
    return function (dispatch) {
        dispatch(removeCommentRequest());
        axios.delete(`${ROOT}/comments/${commentId}`)
        .then((res) => {
            dispatch(removeCommentSuccess(commentId));
        })
        .catch((error) => {
            dispatch(removeCommentError(error.message));
        });        
    };
}

export function removeCommentRequest () {
    return {
        type: types.REMOVE_COMMENT_REQUEST
    };
}

export function removeCommentSuccess (id) {
    return {
        type: types.REMOVE_COMMENT_SUCCESS,
        payload: id
    };
}

export function removeCommentError (error) {
    return {
        type: types.REMOVE_COMMENT_ERROR,
        payload: error
    };
}