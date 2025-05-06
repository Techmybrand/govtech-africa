'use client';
import React, { useEffect, useRef } from 'react';
import { govtDetails } from '@/mock/navLists.mock';
import Image from 'next/image';
import styles from './WhyPartner.module.scss';

const WhyPartner = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const topSectionRef = useRef<HTMLDivElement>(null);
    const topImageRef = useRef<HTMLDivElement>(null);
    const topTextRef = useRef<HTMLDivElement>(null);
    const paragraphOneRef = useRef<HTMLDivElement>(null);
    const paragraphTwoRef = useRef<HTMLDivElement>(null);
    const paragraphThreeRef = useRef<HTMLUListElement>(null);
    
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
        const isMobile = () => window.innerWidth <= 650;
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
    <section className={styles.why_partner_container}>
        <div className={styles.why_partner_wrapper}>
            <div ref={headerRef} className={styles.header}>
                <h1>Why Partner with AGW’25?</h1>
                <div className={styles.header_subtext}>
                    <h3>
                        As Africa accelerates its digital transformation, Africa 
                        Govtech Week presents a unique opportunity for key 
                        stakeholders to shape the future of governance through 
                        technology.
                    </h3>
                    <h3>
                        Whether you are a government institution, a private 
                        sector leader, or an international development organization, 
                        this event offers a strategic platform to drive meaningful 
                        impact in the govtech ecosystem.
                    </h3>
                </div>
            </div>
            <div ref={topSectionRef} className={styles.__wrapper}>
                <div ref={topImageRef} className={styles.image_wrapper}>
                    <Image alt='' fill src='/images/government.png' /> 
                </div>
                <div className={styles.government_details}>
                    <h2 ref={paragraphOneRef}>For African Governments -</h2>
                    <h3 ref={paragraphTwoRef}>
                        For African governments, digital transformation is 
                        no longer optional—it is essential for efficient, 
                        transparent, and citizen-centric governance. 
                        By partnering with Africa Govtech Week, governments 
                        will:
                    </h3>
                    <ul ref={paragraphThreeRef}>
                        {govtDetails?.map((details: string, index: number) =>
                            <li key={index}>{details}</li>
                        )}
                    </ul>
                </div>
            </div>
            <div className={styles.divider}></div>
        </div>
    </section>
  )
}

export default WhyPartner; 