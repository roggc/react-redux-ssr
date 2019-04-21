console.log('src/store/index');

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middlewares = [thunk];
export const createStoreWithMiddleware= applyMiddleware(...middlewares)(createStore);
export const getStoreIfItsClient= (object)=>
{
    let store=null;
    if(object.isClient)
    {
      try
      {
        const state = window.__STATE__;
        delete window.__STATE__;
        store= createStoreWithMiddleware(rootReducer, state);
      }
      catch
      {
        return store;
      }
    }
    return store;
};
