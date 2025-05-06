'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './CrossRoads.module.scss';

const CrossRoads = () => {
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
          <div ref={topSectionRef} className={styles.wrapper_class}>
            <div ref={topImageRef} className={styles.image_wrapper}>
              <Image alt='' fill src='/images/expectations.jpg' />
            </div>
            <div className={styles.text_details}>
              <h1 ref={topTextRef}>A Continent at Crossroads</h1>
              <h3 className={styles.paragraph_1} ref={paragraphOneRef}>
                {`Africa's governance challenges are unique, but so is the 
                continent's potential. With 60% of its population under 25, 
                the continent's demographic dividend will depend largely on its 
                ability to deliver tech-enabled public services that empower 
                citizens, attract talent, and unlock economic growth.`}
              </h3>
              <h3 className={styles.paragraph_2} ref={paragraphTwoRef}>
                However, realizing this vision requires more than just 
                technological adoption—it demands bold policy choices, 
                strategic investments, and multi-stakeholder collaboration. 
                African governments must not only modernize public institutions 
                but also foster an ecosystem where innovation thrives, ensuring 
                that digital transformation leaves no one behind.
              </h3>
              <h3 className={styles.paragraph_3} ref={paragraphThreeRef}>
                The Africa Govtech Week will serve as the catalyst for this 
                transformation, bringing together policymakers, technologists,
                and development partners to co-create solutions that address 
                governance inefficiencies, enhance service delivery, and build 
                trust in digital governance. By anchoring discussions in practical 
                implementation and scalable solutions, the event will lay the 
                groundwork for sustainable, citizen-centric digital governance 
                across the continent.
              </h3>
            </div>
          </div>
          <div className={styles.divider}></div>
          {/* <DetailedPairDisplay reverseBottomSection divider
            image1='/images/expectations.jpg'
            className={styles.wrapper_class}
            TextDetails1={
            } 
          /> */}
        </div>
      </div>
    </div>
  )
}

export default CrossRoads;
