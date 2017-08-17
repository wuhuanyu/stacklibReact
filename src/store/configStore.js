import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/index';
const createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware))(createStore);

const initialState = {
    isFetching: true,
    entities: {
        bbc: {},
        medium: {},
        reuters: {}
    }
}

export default function configureStore(init=initialState) {
    const store = createStore(rootReducer,init,applyMiddleware(thunkMiddleware));
    return store;
}