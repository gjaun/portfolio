import React from 'react';

/*
File Name: Card.jsx 
Student Name: Gichul Jaun
Student ID: 301375948
Course: COMP229-408
Date: October 1, 2024
*/

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
