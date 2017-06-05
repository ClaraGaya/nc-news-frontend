import * as actions from '../actions/actions.users';
import * as types from '../actions/types';
import {expect} from 'chai';

describe('actions.getUsers', function () {
    it('getUsersRequest: returns the expected action', function () {
        const action = actions.getUsersRequest();
        expect(action).to.eql({
            type: types.GET_USERS_REQUEST,
        });
    });
    it('getUsersSuccess: returns the expected action', function () {
        const action = actions.getUsersSuccess({});
        expect(action).to.eql({
            type: types.GET_USERS_SUCCESS,
            payload: {}
        });
    });
    it('getUsersError: returns the expected action', function () {
        const action = actions.getUsersError({});
        expect(action).to.eql({
            type: types.GET_USERS_ERROR,
            payload: {}
        });
    });
});

describe('actions.getUser', function () {
    it('getUserRequest: returns the expected action', function () {
        const action = actions.getUserRequest();
        expect(action).to.eql({
            type: types.GET_USER_REQUEST,
        });
    });
    it('getUserSuccess: returns the expected action', function () {
        const action = actions.getUserSuccess({});
        expect(action).to.eql({
            type: types.GET_USER_SUCCESS,
            payload: {}
        });
    });
    it('getUserError: returns the expected action', function () {
        const action = actions.getUserError({});
        expect(action).to.eql({
            type: types.GET_USER_ERROR,
            payload: {}
        });
    });
});
