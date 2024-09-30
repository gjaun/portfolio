import React from 'react';
import styles from './Container.module.css';

/*
File Name: Container.jsx 
Student Name: Gichul Jaun
Student ID: 301375948
Course: COMP229-408
Date: October 1, 2024
*/

function Container(props) {
  return props.main ? (
    <main className={`${styles.container} ${props.className}`}>
      {props.children}
    </main>
  ) : (
    <section className={`${styles.container} ${props.className}`}>
      {props.children}
    </section>
  );
}

export default Container;
