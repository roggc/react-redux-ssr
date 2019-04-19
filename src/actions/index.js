//index.js

import * as types from './types';

export const messageSet=(val)=>
{
  const act=
  {
    type: types.MESSAGE_SET,
    val: val
  };
  return act;
};
