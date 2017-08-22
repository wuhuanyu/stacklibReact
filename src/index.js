import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as client from './repository/client'
import   Modal    from './components/router-test';
import RouterEntry from './components/RouterEntry';
import 'typeface-roboto';
// import Slider from './components/slider/Slider';


const IMAGE_DATA = [
  {
    src: require('./components/slider/images/demo1.jpg'),
    alt: 'images-1',
  },
  {
    src: require('./components/slider/images/demo2.jpg'),
    alt: 'images-2',
  },
  {
    src: require('./components/slider/images/demo3.jpg'),
    alt: 'images-3',
  },
];

const AppTest = function(props){
  return (
    <div>this is app test</div>
  )
};
render(
  <App/>
    , document.getElementById('root'));
registerServiceWorker();
