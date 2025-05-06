'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './EventDetails.module.scss';

const EventDetails = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const topSectionRef = useRef<HTMLDivElement>(null);
  const topImageRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const paragraphOneRef = useRef<HTMLDivElement>(null);
  const paragraphTwoRef = useRef<HTMLDivElement>(null);
  const paragraphThreeRef = useRef<HTMLDivElement>(null);
    
  useEffect(() => {
    const headerSection = headerRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
    );
  
    if (headerSection) {
      observer.observe(headerSection);
    }
  
    return () => observer.disconnect();
  }, []);

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
        <div ref={headerRef} className={styles.theme_container}>
          <div className={styles.theme_container_content}>
            <h1>2025 Theme</h1>
            <div className={styles.subtext}>
              <h3>Enabling Government Excellence in Africa:</h3>
              <p>
                Harnessing the Power of Technology and the Digital 
                Economy for Shared Prosperity
              </p>
            </div>
          </div>
        </div>

        <div className={styles.event_details}>
          <div ref={topSectionRef} className={styles.wrapper_class}>
            <div ref={topImageRef} className={styles.image_wrapper}>
              <Image alt='' fill src='/images/about_event.jpg' />
            </div>
            <div className={styles.event_details_text}>
              <h1 ref={topTextRef}>Event Details</h1>
              <h3 className={styles.paragraph_1} ref={paragraphOneRef}>
                {`The Africa Govtech Week is the continent's flagship 
                government technology event, featuring 5 days of week-long 
                engagements with over 15 conference panel sessions among 
                other highlights. It will unite 200+ leaders, 100+ 
                exhibitors and 3000+ participants from amongst African 
                governments, private-sector innovators, investors, academia 
                & research think-tanks, and global development partners. 
                Together, participants will channel issues-based and 
                solution-driven conversations, and co-design strategies 
                to harness the digital economy for transparent, 
                citizen-centric governance in Africa.`}
              </h3>
              <h3 className={styles.paragraph_2} ref={paragraphTwoRef}>
                Key topics around digital public infrastructures, emerging 
                technologies, cybersecurity and data protection, cloud-based 
                governance, network connectivity, infrastructure financing, 
                and overall digital transformation in Africa’s public sector 
                will form the crux of discussions at the Africa Govtech Week.
              </h3>
              <h3 className={styles.paragraph_3} ref={paragraphThreeRef}>
                The conference will also serve as a matchmaking hub for 
                stakeholders, playing host to government technology 
                exhibitions, networking social events, tailored trainings, 
                and hackathons, among other supplementary highlights that 
                will shimmer the conference to strike a memorable stroke on 
                participants.
              </h3>
            </div>
          </div>
          <div className={styles.divider}></div>
          {/* <DetailedPairDisplay reverseBottomSection divider
            image1='/images/about_event.jpg'
            className={styles.wrapper_class}
            TextDetails1={
            } 
          /> */}
        </div>
      </div>
    </div>
  )
}

export default EventDetails