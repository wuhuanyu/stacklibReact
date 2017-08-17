import {TOGGLE_IS_FETCHING} from '../actions/ActionConstants';
const toggle = function (on) {
    let action = {
        type: TOGGLE_IS_FETCHING,
        isFetching: on
    }
    return action;
};

export default toggle;