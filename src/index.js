import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import faviconPath from '../public/favicon.ico';

ReactDOM.render(
  <div>
    <Favicon url={faviconPath} />
    <App />
  </div>, 
  document.getElementById('root'));
registerServiceWorker();