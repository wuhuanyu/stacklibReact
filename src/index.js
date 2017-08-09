import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Drawer from './components/drawer-test'

import   Modal    from './components/router-test';
import RouterEntry from './components/RouterEntry';
import 'typeface-roboto';
ReactDOM.render(<RouterEntry/>, document.getElementById('root'));
registerServiceWorker();
