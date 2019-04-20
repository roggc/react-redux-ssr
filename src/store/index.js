//index.js

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middlewares = [thunk];
export const createStoreWithMiddleware= applyMiddleware(...middlewares)(createStore);

let _store;
if(__isClient__)
{
  const state = window.__STATE__;
  delete window.__STATE__;
  _store= createStoreWithMiddleware(rootReducer, state);
}

export const store = _store;
