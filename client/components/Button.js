import React, { PropTypes } from 'react';

const Button = (props) => {
  let classNameVar = 'nav_button'; 
  if (props.activeState === 'active'){
        classNameVar = 'nav_button_active';
    }
    else {
        classNameVar = 'nav_button';
    }
//  console.log(props.activeState, props.id, "BUTTONZ", classNameVar, props.order)

  return (
    <button className={classNameVar}
        key={props.key}
        id={props.id} 
        order={props.order}
        onClick={() => {props.handleClick(props.id, props.order)}}>{props.name}</button>
  );
};


export default Button;
