//index.js

import {combineReducers} from 'redux';
import * as types from '../actions/types';

const messageReducer= (val= "hello world", act) =>
{
  let newVal;
  switch(act.type)
  {
    case types.MESSAGE_SET:
      newVal= act.val;
      break;
    default:
      return val;
  }
  return newVal;
};

export default combineReducers({
    message: messageReducer
});
