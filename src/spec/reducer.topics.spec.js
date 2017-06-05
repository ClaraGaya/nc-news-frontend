import { expect } from 'chai';
import * as types from '../actions/types';
import * as actions from '../actions/actions.topics';
import { reducerTopics } from '../reducers/topics';

describe('Tests reducerTopics',  () => {
    const initialState = {
        data: [
            {
                slug:"football",
                title:"Football",
                _id:"1"
            },
            {
                slug:"cooking",
                title:"Cooking",
                _id:"2"
            }
        ],
        loading: false,
        error: null
    };
    describe('should handle GET_TOPICS', () => {
        it('getTopicsRequest: does not mutate the initial state', function () {
            const action = actions.getTopicsRequest();
            const newState = reducerTopics(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState.error).to.be.null;
        });
        it('getTopicsSuccess: does not mutate the initial state', function () {
            const action = actions.getTopicsSuccess([]);
            const newState = reducerTopics(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.data).to.not.equal(initialState.data);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.be.null;
            expect(newState.data).to.eql([]);
        });
        it('getTopicsError: does not mutate the initial state', function () {
            const action = actions.getTopicsError();
            const newState = reducerTopics(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.loading).to.be.false;
        });
    });
});
 