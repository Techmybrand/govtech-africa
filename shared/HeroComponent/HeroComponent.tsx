'use client';
import React, { useEffect, useRef, useState } from 'react';
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
  overlay?: boolean
}
const HeroComponent = ({ title, subText, type = 'big', backgroundImage,
  headerSubtextClass, headerTitleClass, overlay = false
}: HeroProps) => {
  const pathname = usePathname();
  const isPath = pathname === '/about-us'
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <div data-type={type} className={styles.hero_container}>
      <div className={styles.background_image}>
        <Image alt='background' fill src={backgroundImage} />
      </div>
      {overlay && (
        <div className={styles.background_image_wrapper}></div>
      )}
      <div ref={heroRef} data-path={isPath}
        className={`${styles.hero_content_wrapper} ${isVisible ? styles.visible : ""}`}
      >
        <h3 className={`${headerTitleClass}`}>{title}</h3>
        <div className={`${headerSubtextClass} ${styles.text}`}>{subText}</div>
      </div>
    </div>
  )
}

export default HeroComponent;