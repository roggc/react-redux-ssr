//index.js

import React from 'react';
import {connect} from 'react-redux';

const comp= (props)=>
{
  const render=
  (
    <div>
      {props.message}
    </div>
  );
  return render;
}

const mapStateToProps= (state)=>
{
  return {
    message: state.message
  };
};

export default connect(mapStateToProps)(comp);
