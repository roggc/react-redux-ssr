//index.js

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middleWares = [thunk];
let _store;
if(__isClient__)
{
  const initialState = window.__STATE__;
  delete window.__STATE__;
  _store= applyMiddleware(...middlewares)(createStore)(rootReducer, initialState);
}
else
{
  _store= applyMiddleware(...middlewares)(createStore)(rootReducer);
}
const store = _store;

export default store;
