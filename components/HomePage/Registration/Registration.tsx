'use client';
import React from 'react';
import { CustomLink } from '@/shared';
import Image from 'next/image';
import styles from './Registration.module.scss';

const Registration = () => {
  return (
    <section id='register' className={styles.registration_container}>
      <div className={styles.content_container}>
        <div className={styles.content}>
          <div className={styles.content_text}>
            <h2>Register to secure your spot</h2>
            <h3>
              {`Be part of Africa's most transformative digital governance 
              experience—connect with government leaders & changemakers, 
              explore cutting-edge innovations, and help shape the 
              continent's GovTech future`}
            </h3>
            <CustomLink label='Register' href='/contact'
              className={styles.custom_link_class}
            />
          </div>
          <div className={styles.content_image}>
            <Image alt='' fill src='/svgs/register.svg' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration