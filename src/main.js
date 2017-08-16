import React from 'react';

import ReactDom from 'react'
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './store/configStore';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);