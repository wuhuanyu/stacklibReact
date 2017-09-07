import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import {BrowserRouter as Router} from 'react-router-dom';
import TaggedNewsContainer from './components/news/TaggedNewssContainer';

import Article from './components/news/Article';
import {mockClient} from './repository/client'
import Feedback from './components/others/Feedback';
import About from './components/others/About';

render(
  <App/>
  ,
document.getElementById('root'));
registerServiceWorker();
