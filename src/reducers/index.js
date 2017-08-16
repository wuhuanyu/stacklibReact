import {combineReducers} from 'redux';
import isFetching from './isfetching';

const rootReducer = combineReducers({
    isFetching,
});