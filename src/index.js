import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as client from './repository/client'
import 'typeface-roboto';
import {BrowserRouter as Router} from 'react-router-dom';
import TaggedNewsContainer from './components/news/TaggedNewssContainer';
import Slider from './components/slider/Slider';
import Article from './components/news/Article';
import {mockClient} from './repository/client'
const IMAGE_DATA = [
  {
    src: require('./components/slider/images/demo1.jpg'),
    alt: 'images-1'
  }, {
    src: require('./components/slider/images/demo2.jpg'),
    alt: 'images-2'
  }, {
    src: require('./components/slider/images/demo3.jpg'),
    alt: 'images-3'
  }
];

render(
  <Article tag={"China"} source={"bbc"}/>,
/* <App/>, */
document.getElementById('root'));
registerServiceWorker();
