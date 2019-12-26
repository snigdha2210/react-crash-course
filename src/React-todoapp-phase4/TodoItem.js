import React from 'react';

export function Item(props) {
  return (
    <div style={{display: !props.content & 'none'}}>
      <input type="checkbox" checked={props.completed} />
      <p>{props.content}</p>
    </div>
  ); 
}