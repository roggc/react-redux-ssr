console.log('src/reducers/index');

import {combineReducers} from 'redux';
import * as types from '../actions/types';

const environmentReducer= (val= {isClient:false}, act)=>
{
  let newVal;
  switch(act.type)
  {
    case types.ENVIRONMENT_SET:
      newVal=
      {
        ...val,
        isClient: act.val.isClient
      };
      return newVal;
    default:
      return val;
  }
};

const messageReducer= (val= "hello world!", act) =>
{
  let newVal;
  switch(act.type)
  {
    case types.MESSAGE_SET:
      newVal= act.val;
      return newVal;
    default:
      return val;
  }
};

export default combineReducers({
    environment: environmentReducer,
    message: messageReducer
});
