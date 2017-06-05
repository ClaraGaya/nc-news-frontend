import * as actions from '../actions/actions.comments';
import * as types from '../actions/types';
import {expect} from 'chai';

describe('actions.getComments', function () {
    it('getCommentsRequest: returns the expected action', function () {
        const action = actions.getCommentsRequest();
        expect(action).to.eql({
            type: types.GET_COMMENTS_REQUEST,
        });
    });
    it('getCommentsSuccess: returns the expected action', function () {
        const action = actions.getCommentsSuccess({});
        expect(action).to.eql({
            type: types.GET_COMMENTS_SUCCESS,
            payload: {}
        });
    });
    it('getCommentsError: returns the expected action', function () {
        const action = actions.getCommentsError({});
        expect(action).to.eql({
            type: types.GET_COMMENTS_ERROR,
            payload: {}
        });
    });
});

describe('actions.voteComment', function () {
    it('voteCommentRequest: returns the expected action', function () {
        const action = actions.voteCommentRequest();
        expect(action).to.eql({
            type: types.VOTE_COMMENT_REQUEST,
        });
    });
    it('voteCommentSuccess: returns the expected action', function () {
        const action = actions.voteCommentSuccess({});
        expect(action).to.eql({
            type: types.VOTE_COMMENT_SUCCESS,
            payload: {}
        });
    });
    it('voteCommentError: returns the expected action', function () {
        const action = actions.voteCommentError({});
        expect(action).to.eql({
            type: types.VOTE_COMMENT_ERROR,
            payload: {}
        });
    });
});

describe('actions.addComment', function () {
    it('addCommentRequest: returns the expected action', function () {
        const action = actions.addCommentRequest();
        expect(action).to.eql({
            type: types.ADD_COMMENT_REQUEST,
        });
    });
    it('addCommentSuccess: returns the expected action', function () {
        const action = actions.addCommentSuccess({});
        expect(action).to.eql({
            type: types.ADD_COMMENT_SUCCESS,
            payload: {}
        });
    });
    it('addCommentError: returns the expected action', function () {
        const action = actions.addCommentError({});
        expect(action).to.eql({
            type: types.ADD_COMMENT_ERROR,
            payload: {}
        });
    });
});

describe('actions.removeComment', function () {
    it('removeCommentRequest: returns the expected action', function () {
        const action = actions.removeCommentRequest();
        expect(action).to.eql({
            type: types.REMOVE_COMMENT_REQUEST,
        });
    });
    it('removeCommentSuccess: returns the expected action', function () {
        const action = actions.removeCommentSuccess({});
        expect(action).to.eql({
            type: types.REMOVE_COMMENT_SUCCESS,
            payload: {}
        });
    });
    it('removeCommentError: returns the expected action', function () {
        const action = actions.removeCommentError({});
        expect(action).to.eql({
            type: types.REMOVE_COMMENT_ERROR,
            payload: {}
        });
    });
});
