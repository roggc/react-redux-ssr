//index.js

import React from 'react';
import {connect} from 'react-redux';
import {messageSet} from '../../actions/index';

const comp= (props)=>
{
  const buttonClicked=()=>
  {
    props.messageSet('i\'ve been clicked');
  };
  
  const render=
  (
    <div>
      {props.message}
      <div>
        <button onClick={buttonClicked}>click me ...</button>
      </div>
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

const mapDispatchToProps = {
  messageSet
};

export default connect(mapStateToProps, mapDispatchToProps)(comp);
