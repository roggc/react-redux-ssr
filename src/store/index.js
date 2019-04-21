console.log('src/store/index');

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {environmentSet} from '../actions/index'

const middlewares = [thunk];

export const getStore= (conf= {isClient:false}, state)=>
{
  let store;
  if(conf.isClient)
  {
    const _state = window.__STATE__;
    delete window.__STATE__;
    store= applyMiddleware(...middlewares)(createStore)(rootReducer, _state);
    store.dispatch(environmentSet({isClient:true}));
  }
  else
  {
    if(state)
    {
      store= applyMiddleware(...middlewares)(createStore)(rootReducer, state);
      store.dispatch(environmentSet({isClient:false}));
    }
    else
    {
      store= applyMiddleware(...middlewares)(createStore)(rootReducer);
    }
  }
  return store;
};
