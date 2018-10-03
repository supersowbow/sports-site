import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './normalize.css';
import App from './App';
import { largeScreenDesign } from './mediaqueries.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root'));

registerServiceWorker();

// ******************************************************
// if screen resizes, intialize variable and execute function
let mediaQueriesAdded = false;
let screenWidth = window.matchMedia('(min-width: 900px)');
largeScreenDesign(screenWidth, mediaQueriesAdded); // Call listener function at run time
screenWidth.addListener(largeScreenDesign); // Attach listener function
// ******************************************************
