//src/client

import React from 'react';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import {getStoreIfItsClient} from './store/index';
import App from './components/app/index';

hydrate
(
  <Provider store={getStoreIfItsClient({isClient:true})}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
