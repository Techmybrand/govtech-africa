'use client';
import React from 'react';
import { CustomLink } from '@/shared';
import Image from 'next/image';
import styles from './ConferenceHighlights.module.scss'
interface cardsProp {
  icon: string
  title: string
  text: string
  href: string
}

const ConferenceHighlights = () => {
  const cardsData: cardsProp[] = [
    {
      icon: '/svgs/govathon.svg',
      title: 'Gov-A-thon Africa',
      text: `Gov-a-thon Africa is a high-impact, government-focused hackathon
       designed to run simultaneously with Africa GovTech Week, providing a 
       dynamic platform for developers, tech entrepreneurs, and innovators 
       to create cutting-edge digital solutions tailored to the public sector`,
      href: '/'

    },
    {
      icon: '/svgs/govtech_labs.svg',
      title: 'The Africa Govtech Co-Creation Lab',
      text: `The Africa Govtech Co-Creation Lab is a dedicated innovation 
        and policy development initiative within the Africa GovTech Week, 
        designed to bring together key stakeholders to collaboratively 
        develop a Continental GovTech Action Plan.`,
      href: '/'
    },
    {
      icon: '/svgs/govtech_alliance.svg',
      title: 'The Africa Govtech Alliance and Innovation Fund',
      text: `The Africa GovTech Alliance and Innovation Fund is a groundbreaking 
        initiative designed to be launched at Africa GovTech Week, aimed at 
        accelerating the adoption of technology in governance, fostering 
        cross-border collaboration, and funding scalable digital solutions 
        for public sector transformation across the continent`,
      href: '/'
    }
  ]
  return (
    <section className={styles.highlights_container}>
      <div className={styles.highlights_content}>
        <h1>Other Conference Highlights</h1>
        <div className={styles.cards}>
          {cardsData.map((data: cardsProp, index: number) =>
            <div key={index} className={`${styles.card} 
              ${index === 1 && styles.second_card}
              ${index === 2 && styles.last_card}`}
            >
              <div className={styles.box}>
                <div className={styles.icon_wrapper}>
                  <Image alt='' fill src={data?.icon} />
                </div>
              </div>
              <div className={styles.text}>
                <h3>{data?.title}</h3>
                <p>{data?.text}</p>
                <CustomLink color='black' label='Read more'
                  href={data.href} className={styles.link_class}
                  iconType='sm_arrow'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ConferenceHighlights