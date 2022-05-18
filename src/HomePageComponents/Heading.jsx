import React from 'react';
import styles from './heading.module.css';

export const Heading = ({title}) => {
  return (
    <div className={styles.heading}>{title}</div>
  )
}
