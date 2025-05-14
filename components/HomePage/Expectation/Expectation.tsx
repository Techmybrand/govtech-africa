'use client';
import React from 'react';
import { CustomLink, DetailedPairDisplay } from '@/shared';
import styles from './Expectation.module.scss';

const Expectation = () => {
  const arrayOfTexts: string[] = [
    'High-level keynotes from heads of state, ministers & industry leaders',
    'Expert panels on Govtech, AI, data governance, digital public infrastructures et al',
    'Live showcases of transformative government technology solutions',
    'Several high level Govtech–related deals and MoUs to be signed',
    'Exclusive launch of the Africa Govtech Alliance & Innovation Fund',
    'Development and adoption of Africa’s first Govtech Continental Action Plan',
    'Inaugural African government technology hackathon [Gov-a-thon Africa',
  ]
  return (
    <section className={styles.expectation_container}>
      <DetailedPairDisplay image1='/images/expect.png'
        className={styles.wrapper}
        TextDetails1={
          <div className={styles.text}>
            <div className={styles.text_header}>
              <h2>What to Expect?</h2>
            </div>
            <ul className={styles.text_list_wrapper}>
              {arrayOfTexts.map((text: string, index: number) =>
                <li key={index} className={styles.text_list}>
                  {text}
                </li>
              )}
            </ul>
            <h3>
              {`Through thought-provoking discussions, hands-on innovation, 
              high-impact engagements and collaborations, this event will 
              define Africa's trajectory in digital governance.`}
            </h3>
            <div className={styles.text_btn}>
              <CustomLink label='Learn more' href='/about-us#expect'
                className={styles.text_btn_link}
              />
            </div>
          </div>
        }
      />
    </section>
  )
}

export default Expectation