import { expect } from 'chai';
import * as types from '../actions/types';
import * as actions from '../actions/actions.articles';
import { reducerArticle } from '../reducers/article';

describe('Tests getArticle',  () => {
    const initialState = {
        article: [],
        loading: false,
        error: null
    };
    describe('should handle GET_ARTICLE', () => {
        it('getArticleRequest: does not mutate the initial state', function () {
            const action = actions.getArticleRequest();
            const newState = reducerArticle(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('getArticleSuccess: does not mutate the initial state', function () {
            const action = actions.getArticleSuccess([]);
            const newState = reducerArticle(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.article).to.not.equal(initialState.article);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
            expect(newState.article).to.eql([]);
        });
        it('getArticleError: does not mutate the initial state', function () {
            const action = actions.getArticleError();
            const newState = reducerArticle(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
    });
});