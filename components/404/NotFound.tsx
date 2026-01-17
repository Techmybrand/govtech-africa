import React from 'react';
import styles from './NotFound.module.scss';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className={styles.not_found_container}>
      <div className={styles.overlay}></div>
      <div className={styles.details}>
        <div className={styles.image}>
          <Image alt='' fill src='/svgs/404.svg' />
        </div>
        <h3>Page not found!</h3>
      </div>
    </div>
  )
}

export default NotFound