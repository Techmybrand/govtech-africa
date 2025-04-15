import React from 'react';
import styles from './Participation.module.scss'
import Image from 'next/image';

interface CardProps {
  icon: string
  title: string
  subtext: string
}
const Participation = () => {
  const cardData: CardProps[] = [
    {icon: '/svgs/govt.svg', 
      title: 'Government Leaders & Policymakers', 
      subtext: 'Shape regulatory frameworks and tech-driven governance strategies.'
    },
    {
      icon: '/svgs/tech.svg',
      title: 'Tech Innovators & Startups',
      subtext: 'Pitch, showcase, and scale solutions for Africa’s public sector.'
    },
    {
      icon: '/svgs/investors.svg',
      title: 'Investors & Development Partners',
      subtext: 'Unlock opportunities in the next frontier of African digital governance.'
    },
    {
      icon: '/svgs/academic.svg',
      title: 'Academia & Think Tanks',
      subtext: 'Contribute research-driven insights to policy discussions.'
    },
  ]
  return (
    <section className={styles.participation_section}>
      <h2>Who Should Participate?</h2>
      <div className={styles.cards_container}>
        {cardData.map((data: CardProps, index: number) =>
          <div className={styles.card} key={index}>
            <div className={styles.icon_wrapper}>
              <div className={styles.icon}>
                <Image alt='icon' fill src={data?.icon} />
              </div>
            </div>
            <h3>{data?.title}</h3>
            <p>{data?.subtext}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Participation