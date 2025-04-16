'use client';
import React from 'react';
import { Button } from '@/shared';
import { useRouter } from 'next/navigation';
import styles from './Contact.module.scss';

const Contact = () => {
  const router = useRouter();
  return (
    <section className={styles.continent_container}>
      <div className={styles.overlay}></div>
      <div className={styles.continent_details}>
        <h3>
          With over 60% of Africa’s h3opulation under 25, the demand 
          for efficient, transparent, and digital-first governance 
          has never been greater. Governments are turning to 
          technology not just to modernize but to build trust, 
          enhance service delivery, and drive economic transformation.
        </h3>
        <Button buttonType='transparent' onClick={() => router.push('/contact')} 
            className={styles.contact_btn}
        >
            <p>Contact us today</p>
        </Button>
      </div>
    </section>
  )
}

export default Contact