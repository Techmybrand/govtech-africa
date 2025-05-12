'use client';
import React, { useRef, useEffect } from 'react';
import { CustomLink } from '@/shared';
import Image from 'next/image';
import styles from './Partners.module.scss';

const Partners = () => {
  const topSectionRef = useRef<HTMLDivElement>(null);
  const topImageRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const paragraphOneRef = useRef<HTMLDivElement>(null);
  const paragraphTwoRef = useRef<HTMLDivElement>(null);
  const paragraphThreeRef = useRef<HTMLDivElement>(null);
  const paragraphFourRef = useRef<HTMLDivElement>(null);
  const customLinkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = () => window.innerWidth <= 768;
    const topSection = topSectionRef.current;
    const topImage = topImageRef.current;
    const topText = topTextRef.current;
    const firstParagragph = paragraphOneRef.current;
    const secondParagraph = paragraphTwoRef.current;
    const thirdParagraph = paragraphThreeRef.current
    const fourthParagraph = paragraphFourRef.current
    const linkSection = customLinkRef.current

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
        if (fourthParagraph) cardObserver.observe(fourthParagraph);
        if (linkSection) cardObserver.observe(linkSection);
      } else {
        if (topImage) cardObserver.unobserve(topImage);
        if (topText) cardObserver.unobserve(topText);
        if (firstParagragph) cardObserver.unobserve(firstParagragph);
        if (secondParagraph) cardObserver.unobserve(secondParagraph);
        if (thirdParagraph) cardObserver.unobserve(thirdParagraph);
        if (fourthParagraph) cardObserver.unobserve(fourthParagraph);
        if (linkSection) cardObserver.unobserve(linkSection);
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
        if (fourthParagraph) cardObserver.unobserve(fourthParagraph);
        if (linkSection) cardObserver.unobserve(linkSection);
          cardObserver.disconnect();
      } else {
        if (topSection) observer.unobserve(topSection);
        observer.disconnect();
      }
    };
  }, []);
  return (
    <section className={styles.partners_wrapper}>
      <div className={styles.partners_container}>
        <div ref={topSectionRef} className={styles.wrapper_class}>
          <div ref={topImageRef} className={styles.image_wrapper}>
            <Image alt='' fill src='/images/partnership.jpg' />
          </div>
          <div className={styles.text}>
            <h2 ref={topTextRef}>Partner with Us</h2>
            <div className={styles.text_body}>
              <h3 className={styles.paragraph_1} ref={paragraphOneRef}>
                Africa is at a turning point, embracing technology to redefine 
                governance, enhance public service delivery, and drive 
                socio-economic transformation. <span>Africa Govtech Week 2025 </span> 
                is the premier platform where governments, technology service 
                providers, research think-tanks and global development partners 
                converge to accelerate this digital evolution.
              </h3>
              <br />
              <h3 className={styles.paragraph_2} ref={paragraphTwoRef}>
                By partnering with <span>AGW’25</span>, your organization 
                gains unparalleled access to key decision-makers, industry 
                disruptors, and policy shapers at the forefront of Africa’s 
                govtech revolution.
              </h3>
              <br />
              <h3 className={styles.paragraph_3} ref={paragraphThreeRef}>
                Whether you are a government institution looking to showcase 
                groundbreaking digital initiatives, a tech service provider 
                looking to forge strategic alliances or influence digital 
                policy, a private sector leader seeking high-level engagement,
                or a development organization committed to advancing 
                sustainable digital governance in Africa, this is the event 
                to make your mark.
              </h3>
              <br />
              <h3 className={styles.paragraph_4} ref={paragraphFourRef}>
                Seize the opportunity to be more than just a participant—be a 
                driving force in Africa’s digital future.
              </h3>
            </div>
            <div className={styles.link_class_container} ref={customLinkRef}>
              <CustomLink className={styles.link_class}
                label='Explore' href='/partner'
              />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Partners;
