import React from 'react';

function Card(props) {
  return props.title ? (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  ) : (
    <div>{props.children}</div>
  );
}

export default Card;
