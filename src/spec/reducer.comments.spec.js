import { expect } from 'chai';
import * as types from '../actions/types';
import * as actions from '../actions/actions.comments';
import { reducerComments } from '../reducers/comments';

describe('Tests getComments',  () => {
    const initialState = {
        byId: {
            1:{
                body:"Hi there",
                _id: 1
            },
            2:{
                body:"This is a comment",
                _id: 2
            }
        },
        loading: false,
        error: null
    };
    describe('should handle GET_COMMENTS', () => {
        it('getCommentsRequest: does not mutate the initial state', function () {
            const action = actions.getCommentsRequest();
            const newState = reducerComments(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('getCommentsSuccess: does not mutate the initial state', function () {
            const action = actions.getCommentsSuccess([]);
            const newState = reducerComments(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
            expect(newState.byId).to.eql({});
        });
        it('getCommentsError: does not mutate the initial state', function () {
            const action = actions.getCommentsError();
            const newState = reducerComments(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
    });
    describe('should handle VOTE_COMMENT', () => {
        it('voteCommentRequest: does not mutate the initial state', function () {
            const action = actions.voteCommentRequest();
            const newState = reducerComments(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('voteCommentSuccess: does not mutate the initial state', function () {
            const action = actions.voteCommentSuccess({});
            const newState = reducerComments(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
        });
        it('voteCommentError: does not mutate the initial state', function () {
            const action = actions.voteCommentError();
            const newState = reducerComments(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
    });
    describe('should handle ADD_COMMENT', () => {
        it('addCommentRequest: does not mutate the initial state', function () {
            const action = actions.addCommentRequest();
            const newState = reducerComments(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('addCommentSuccess: does not mutate the initial state', function () {
            const action = actions.addCommentSuccess({});
            const newState = reducerComments(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
        });
        it('addCommentError: does not mutate the initial state', function () {
            const action = actions.addCommentError();
            const newState = reducerComments(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
        it('addCommentSuccess: adds a comment', function () {
            const action = actions.addCommentSuccess({"body":"This is another comment","_id":3});
            const newState = reducerComments(initialState, action);
            expect(newState.byId).to.eql({
                1:{
                    body:"Hi there",
                    _id: 1
                },
                2:{
                    body:"This is a comment",
                    _id: 2
                },
                3:{
                    body:"This is another comment",
                    _id: 3
                }
            });
        });
    });
    describe('should handle REMOVE_COMMENT', () => {
        it('removeCommentRequest: does not mutate the initial state', function () {
            const action = actions.removeCommentRequest();
            const newState = reducerComments(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('removeCommentSuccess: does not mutate the initial state', function () {
            const action = actions.removeCommentSuccess({});
            const newState = reducerComments(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
        });
        it('removeCommentError: does not mutate the initial state', function () {
            const action = actions.removeCommentError();
            const newState = reducerComments(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
        it('removeCommentSuccess: removes a comment', function () {
            const action = actions.removeCommentSuccess(3);
            const newState = reducerComments(initialState, action);
            expect(newState.byId).to.eql({
                1:{
                    body:"Hi there",
                    _id: 1
                },
                2:{
                    body:"This is a comment",
                    _id: 2
                }
            });
        });
    });
});