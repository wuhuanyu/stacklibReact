import {TOGGLE_IS_FETCHING} from '../actions/ActionConstants';
export default function(state=false,action){
    if(action.type===TOGGLE_IS_FETCHING){
        return action.value;
    }
    else return state;
}

