import React from 'react';

export const Joke = (props) => {
  return (
    <div>
      {/* <p>Question: {props.question !== null ? props.question : null}</p> */}
      <p style={{display: !props.question && 'none'}}>Question: props.question</p>
      {/* <p>Awnser: {props.punchLine}</p> */}
      <p style={{
        backgroundColor: !props.question && "#902f40",
        borderRadius: !props.question && "5px"
        }}>{props.question ? 'Awnser:' + props.punchLine : props.punchLine}</p>
    </div>
  );
}