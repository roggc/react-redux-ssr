console.log('src/components/stateExample1/index');

import React from 'react';
import {connect} from 'react-redux';
import {messageSet} from '../../actions/index';

const comp= (props)=>
{
  const buttonClicked=()=>
  {
    props.messageSet('i\'ve been clicked');
  };

  const el=
  (
    <div>
      {props.message}
      <div>
        <button onClick={buttonClicked}>click me ...</button>
      </div>
    </div>
  );
  return el;
};

const mapStateToProps=(state)=>
{
  const ob=
  {
    message: state.message
  };
  return ob;
};

const mapDispatchToProps=
{
  messageSet
};

export default connect(mapStateToProps, mapDispatchToProps)(comp);
