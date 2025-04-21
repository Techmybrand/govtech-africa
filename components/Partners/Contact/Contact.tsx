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
          The Africa Govtech Week is not just a conference—it is a movement 
          to redefine governance in the digital era. Partnering with this 
          event means contributing to a future where technology empowers 
          governments, businesses, and citizens alike. Whether through policy 
          influence, innovation, or funding, your organization can play a 
          transformative role in shaping Africa’s digital governance landscape.
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