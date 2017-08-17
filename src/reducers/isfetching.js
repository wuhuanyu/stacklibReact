import {TOGGLE_IS_FETCHING} from '../actions/ActionConstants';
import merge from 'lodash/merge';
const isFetching = function (state = true, action) {
    if (action.type === TOGGLE_IS_FETCHING) {
        return action.isFetching;
        // console.log('hello');
    }
    return state;
}

export default isFetching;
