//index.js

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middleWares = [thunk];
export const createStoreWithMiddleware= applyMiddleware(...middlewares)(createStore);

let _store;
if(__isClient__)
{
  const _state = window.__STATE__;
  delete window.__STATE__;
  _store= createStoreWithMiddleware(rootReducer, _state);
}

export const store = _store;
