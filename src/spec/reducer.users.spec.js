import { expect } from 'chai';
import * as types from '../actions/types';
import * as actions from '../actions/actions.users';
import { reducerUsers } from '../reducers/users';

describe('Tests reducerUsers',  () => {
    const initialState = {
        byId: {},
        loading: false,
        error: null
    };
    describe('should handle GET_USERS', () => {
        it('getUsersRequest: does not mutate the initial state', function () {
            const action = actions.getUsersRequest();
            const newState = reducerUsers(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('getUsersSuccess: does not mutate the initial state', function () {
            const action = actions.getUsersSuccess([]);
            const newState = reducerUsers(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.byId).to.not.equal(initialState.byId);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
            expect(newState.byId).to.eql({});
        });
        it('getUsersError: does not mutate the initial state', function () {
            const action = actions.getUsersError();
            const newState = reducerUsers(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
    });
});
 