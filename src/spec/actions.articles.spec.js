import * as actions from '../actions/actions.articles';
import * as types from '../actions/types';
import {expect} from 'chai';

describe('actions.getArticles', function () {
    it('getArticlesRequest: returns the expected action', function () {
        const action = actions.getArticlesRequest();
        expect(action).to.eql({
            type: types.GET_ARTICLES_REQUEST,
        });
    });
    it('getArticlesSuccess: returns the expected action', function () {
        const action = actions.getArticlesSuccess({});
        expect(action).to.eql({
            type: types.GET_ARTICLES_SUCCESS,
            payload: {}
        });
    });
    it('getArticlesError: returns the expected action', function () {
        const action = actions.getArticlesError({});
        expect(action).to.eql({
            type: types.GET_ARTICLES_ERROR,
            payload: {}
        });
    });
});

describe('actions.getArticle', function () {
    it('getArticleRequest: returns the expected action', function () {
        const action = actions.getArticleRequest();
        expect(action).to.eql({
            type: types.GET_ARTICLE_REQUEST,
        });
    });
    it('getArticleSuccess: returns the expected action', function () {
        const action = actions.getArticleSuccess({});
        expect(action).to.eql({
            type: types.GET_ARTICLE_SUCCESS,
            payload: {}
        });
    });
    it('getArticleError: returns the expected action', function () {
        const action = actions.getArticleError({});
        expect(action).to.eql({
            type: types.GET_ARTICLE_ERROR,
            payload: {}
        });
    });
});

describe('actions.voteArticle', function () {
    it('voteArticleRequest: returns the expected action', function () {
        const action = actions.voteArticleRequest();
        expect(action).to.eql({
            type: types.VOTE_ARTICLE_REQUEST,
        });
    });
    it('voteArticleSuccess: returns the expected action', function () {
        const action = actions.voteArticleSuccess({});
        expect(action).to.eql({
            type: types.VOTE_ARTICLE_SUCCESS,
            payload: {}
        });
    });
    it('voteArticleError: returns the expected action', function () {
        const action = actions.voteArticleError({});
        expect(action).to.eql({
            type: types.VOTE_ARTICLE_ERROR,
            payload: {}
        });
    });
});
