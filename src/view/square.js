import React from 'react';
import {Psquare} from './styles.js'

const Square = props => {

  return (
  // adds props on square component to change value when click the square
  <Psquare
    style={{
      pointerEvents: props.disabled
        ? 'none'
        : 'auto'
    }}
    onClick={props.onClick}
    player={props.player}>
    {props.value}
  </Psquare>);
}

export default Square;
