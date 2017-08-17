import {TOGGLE_IS_FETCHING} from '../actions/ActionConstants';
const toggle = (on) => {
    type : TOGGLE_IS_FETCHING;
    value : on
};

export default toggle;