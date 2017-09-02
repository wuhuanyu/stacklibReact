import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';


render(
  <App/>
    , document.getElementById('root'));
registerServiceWorker();
