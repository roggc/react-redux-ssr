//index.js

import React from 'react';
import {hidrate} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/index';
import App from './components/app/index';

hidrate
(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
