import React from 'react';
import styles from './Container.module.css';

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
