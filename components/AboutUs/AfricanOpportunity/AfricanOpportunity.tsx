'use client';
import React, { useEffect, useRef } from 'react';
// import { DetailedPairDisplay } from '@/shared';
import styles from './AfricanOpportunity.module.scss';
import Image from 'next/image';

const AfricanOpportunity = () => {
  const topSectionRef = useRef<HTMLDivElement>(null);
  const topImageRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const paragraphOneRef = useRef<HTMLDivElement>(null);
  const paragraphTwoRef = useRef<HTMLDivElement>(null);
  const paragraphThreeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const isMobile = () => window.innerWidth <= 768;
    const topSection = topSectionRef.current;
    const topImage = topImageRef.current;
    const topText = topTextRef.current;
    const firstParagragph = paragraphOneRef.current;
    const secondParagraph = paragraphTwoRef.current;
    const thirdParagraph = paragraphThreeRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          cardObserver.unobserve(entry.target);
        }
        });
      },
      {
        root: null,
        threshold: 0.04,
        rootMargin: '0px'
      }
    );

    const setupObservers = () => {
      const mobile = isMobile();
      if (mobile) {
        if (topSection) observer.unobserve(topSection);
        if (topImage) cardObserver.observe(topImage);
        if (topText) cardObserver.observe(topText);
        if (firstParagragph) cardObserver.observe(firstParagragph);
        if (secondParagraph) cardObserver.observe(secondParagraph);
        if (thirdParagraph) cardObserver.observe(thirdParagraph);
      } else {
        if (topImage) cardObserver.unobserve(topImage);
        if (topText) cardObserver.unobserve(topText);
        if (firstParagragph) cardObserver.unobserve(firstParagragph);
        if (secondParagraph) cardObserver.unobserve(secondParagraph);
        if (thirdParagraph) cardObserver.unobserve(thirdParagraph);
        if (topSection) observer.observe(topSection);
      }
    }
      
    setupObservers();

    window.addEventListener('resize', setupObservers);

    return () => {
      window.removeEventListener('resize', setupObservers);
      if (isMobile()) {
        if (topImage) cardObserver.unobserve(topImage);
        if (topText) cardObserver.unobserve(topText);
        if (firstParagragph) cardObserver.unobserve(firstParagragph);
        if (secondParagraph) cardObserver.unobserve(secondParagraph);
        if (thirdParagraph) cardObserver.unobserve(thirdParagraph);
        cardObserver.disconnect();
      } else {
        if (topSection) observer.unobserve(topSection);
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className={styles.theme_cards_container}>
      <div className={styles.cards_container_wrapper}>
        <div className={styles.first_container}>
          <div ref={topSectionRef} className={styles.wrapper_class_reverse}>
            <div ref={topImageRef} className={styles.image_wrapper}>
              <Image alt='' fill src='/images/crossroads2.png' />
            </div>
            <div className={styles.theme_details}>
              <h3 ref={paragraphOneRef}>The African Govtech Opportunity</h3>
              <h6 ref={paragraphTwoRef}>
                With the global technology and digital economy boom, Africa 
                has been afforded a rare opportunity to level the playing field 
                in terms of its development ratio relative to more developed 
                climes.
              </h6>
              <div ref={paragraphThreeRef} className={styles.details_container}>
                <div className={styles.details}>
                  <h3>76%</h3>
                  <p>
                    of African governments are already integrating cloud-based public service platforms (IDC, 2024).
                  </p>
                </div>

                <div className={styles.details}>
                  <h3>$3.8 billion</h3>
                  <p>
                    projected growth in Africa’s digital governance market by 2030.
                  </p>
                </div>

                <div className={styles.details}>
                  <h3>70%</h3>
                  <p>
                    of public services in Africa are being digitized via mobile-based platforms (GSMA, 2024).
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <DetailedPairDisplay reverseBottomSection
            image2='/images/crossroads2.png'
            className2={styles.wrapper_class_reverse}
            TextDetails2={
            } 
          /> */}
        </div>
      </div>
    </div>
  )
}

export default AfricanOpportunity