import {combineReducers} from 'redux';
import isFetching from './isfetching';
import entities from './entities';
const rootReducer = combineReducers({
    isFetching,
    entities,
});

export default rootReducer;