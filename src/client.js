//src/client

import React from 'react';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import {getStore} from './store/index';
import App from './components/app/index';

const store= getStore({isClient: true});

hydrate
(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
