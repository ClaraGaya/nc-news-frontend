import { expect } from 'chai';
import * as types from '../actions/types';
import * as actions from '../actions/actions.users';
import { reducerUser } from '../reducers/user';

describe('Tests reducerUsers',  () => {
    const initialState = {
        user: [],
        loading: false,
        error: null
    };
    describe('should handle GET_USER', () => {
        it('getUserRequest: does not mutate the initial state', function () {
            const action = actions.getUserRequest();
            const newState = reducerUser(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('getUserSuccess: does not mutate the initial state', function () {
            const action = actions.getUserSuccess([]);
            const newState = reducerUser(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.user).to.not.equal(initialState.user);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
            expect(newState.user).to.eql([]);
        });
        it('getUserError: does not mutate the initial state', function () {
            const action = actions.getUserError();
            const newState = reducerUser(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
    });
});