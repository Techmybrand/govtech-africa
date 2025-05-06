'use client';
import React, { useRef } from 'react';
import styles from './Continent.module.scss'
// import Image from 'next/image';

const Continent = () => {
  const containerRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className={styles.continent_container}>
      {/* <div className={styles.image}>
        <Image alt='' fill src='/images/continent_.png' />
      </div> */}
      <div ref={detailsRef} className={styles.continent_details}>
        <h3>A Continent at Crossroads</h3>
        <p>
          With over 60% of Africa’s population under 25, the demand 
          for efficient, transparent, and digital-first governance 
          has never been greater. Governments are turning to 
          technology not just to modernize but to build trust, 
          enhance service delivery, and drive economic transformation.
        </p>
      </div>
    </section>
  )
}

export default Continent