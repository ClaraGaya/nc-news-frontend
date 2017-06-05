import * as actions from '../actions/actions.topics';
import * as types from '../actions/types';
import {expect} from 'chai';

describe('actions.getTopics', function () {
    it('getTopicsRequest: returns the expected action', function () {
        const action = actions.getTopicsRequest();
        expect(action).to.eql({
            type: types.GET_TOPICS_REQUEST,
        });
    });
    it('getTopicsSuccess: returns the expected action', function () {
        const action = actions.getTopicsSuccess({});
        expect(action).to.eql({
            type: types.GET_TOPICS_SUCCESS,
            data: {}
        });
    });
    it('getTopicsError: returns the expected action', function () {
        const action = actions.getTopicsError({});
        expect(action).to.eql({
            type: types.GET_TOPICS_ERROR,
            data: {}
        });
    });
});
