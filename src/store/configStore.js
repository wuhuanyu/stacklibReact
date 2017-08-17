import {createStore,applyMiddleware,compose} from 'redux'
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/index';
const createStoreWithMiddleware  = compose(applyMiddleware(thunkMiddleware))(createStore);

export default function configureStore(initialState){
    const store= createStore(rootReducer,initialState,applyMiddleware(thunkMiddleware));
    return store;
}