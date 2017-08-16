import {TOGGLE_IS_FETCHING} from '../actions/ActionConstants';
const toggle = toggle => {
    type : TOGGLE_IS_FETCHING;
    value : toggle
};

export default toggle;