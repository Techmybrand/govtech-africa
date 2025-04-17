import React from 'react';
import Image from 'next/image';
import styles from './HeroComponent.module.scss'
interface HeroProps {
  title?: string
  subText: string | React.ReactNode
  type?: 'big' | 'small'
  backgroundImage: string
}
const HeroComponent = ({ title, subText, type = 'big', backgroundImage }: HeroProps) => {
  return (
    <div data-type={type} className={styles.hero_container}>
        <div className={styles.background_image}>
            <Image alt='background' fill src={backgroundImage} />
        </div>
        <div className={styles.background_image_wrapper}></div>
        <div className={styles.hero_content_wrapper}>
            <h3>{title}</h3>
            <p>{subText}</p>
        </div>
    </div>
  )
}

export default HeroComponent