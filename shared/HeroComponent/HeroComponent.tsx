'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './HeroComponent.module.scss';

interface HeroProps {
  title?: string
  subText: string | React.ReactNode
  type?: 'big' | 'small'
  backgroundImage: string
  headerTitleClass?: string
  headerSubtextClass?: string
}
const HeroComponent = ({ title, subText, type = 'big', backgroundImage,
  headerSubtextClass, headerTitleClass
}: HeroProps) => {
  const pathname = usePathname();
  const isPath = pathname === '/about-us'
  
  return (
    <div data-type={type} className={styles.hero_container}>
      <div className={styles.background_image}>
        <Image alt='background' fill src={backgroundImage} />
      </div>
      <div className={styles.background_image_wrapper}></div>
      <div data-path={isPath} className={styles.hero_content_wrapper}>
        <h3 className={`${headerTitleClass}`}>{title}</h3>
        <p className={`${headerSubtextClass}`}>{subText}</p>
      </div>
    </div>
  )
}

export default HeroComponent;