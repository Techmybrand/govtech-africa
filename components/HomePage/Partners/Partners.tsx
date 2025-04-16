'use client';
import React from 'react';
import { CustomLink, DetailedPairDisplay } from '@/shared';
import styles from './Partners.module.scss';

const Partners = () => {
  return (
    <section className={styles.partners_container}>
      <DetailedPairDisplay
        className={styles.wrapper_class}
        image1='/images/partners.png'
        TextDetails1={
          <div className={styles.text}>
            <h2>Partner with Us</h2>
            <div className={styles.text_body}>
              <h3>
                Africa is at a turning point, embracing technology to redefine 
                governance, enhance public service delivery, and drive 
                socio-economic transformation. <span>Africa Govtech Week 2025 </span> 
                is the premier platform where governments, technology service 
                providers, research think-tanks and global development partners 
                converge to accelerate this digital evolution.
              </h3>
              <br />
              <h3>
                By partnering with <span>AGW’25</span>, your organization 
                gains unparalleled access to key decision-makers, industry 
                disruptors, and policy shapers at the forefront of Africa’s 
                govtech revolution.
              </h3>
              <br />
              <h3>
                Whether you are a government institution looking to showcase 
                groundbreaking digital initiatives, a tech service provider 
                looking to forge strategic alliances or influence digital 
                policy, a private sector leader seeking high-level engagement,
                or a development organization committed to advancing 
                sustainable digital governance in Africa, this is the event 
                to make your mark.
              </h3>
              <br />
              <h3>
                Seize the opportunity to be more than just a participant—be a 
                driving force in Africa’s digital future.
              </h3>
            </div>
            <CustomLink label='Explore' href='/explore' />
          </div>
        }
      />
    </section>
  )
}

export default Partners;
