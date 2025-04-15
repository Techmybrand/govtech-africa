import React from 'react';
import styles from './Continent.module.scss'

const Continent = () => {
  return (
    <section className={styles.continent_container}>
      <div className={styles.overlay}></div>
      <div className={styles.continent_details}>
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