import { expect } from 'chai';
import * as types from '../actions/types';
import * as actions from '../actions/actions.articles';
import { reducerArticles } from '../reducers/articles';

describe('Tests getArticles',  () => {
    const initialState = {
        byId: {},
        loading: false,
        error: null
    };
    describe('should handle GET_ARTICLES', () => {
        it('getArticlesRequest: does not mutate the initial state', function () {
            const action = actions.getArticlesRequest();
            const newState = reducerArticles(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('getArticlesSuccess: does not mutate the initial state', function () {
            const action = actions.getArticlesSuccess([]);
            const newState = reducerArticles(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
            expect(newState.byId).to.eql({});
        });
        it('getArticlesError: does not mutate the initial state', function () {
            const action = actions.getArticlesError();
            const newState = reducerArticles(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
    });
    describe('should handle VOTE_ARTICLE', () => {
        it('voteArticleRequest: does not mutate the initial state', function () {
            const action = actions.voteArticleRequest();
            const newState = reducerArticles(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('voteArticleSuccess: does not mutate the initial state', function () {
            const action = actions.voteArticleSuccess({});
            const newState = reducerArticles(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
        });
        it('voteArticleError: does not mutate the initial state', function () {
            const action = actions.voteArticleError();
            const newState = reducerArticles(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
    });
});