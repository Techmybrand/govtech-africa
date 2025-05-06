'use client';
import React, { useEffect, useRef } from 'react';
// import { DetailedPairDisplay } from '@/shared';
import styles from './PrivateSector.module.scss';
import { privateSectorDetails } from '@/mock/navLists.mock';
import Image from 'next/image';

const PrivateSector = () => {
    const topSectionRef = useRef<HTMLDivElement>(null);
    const topImageRef = useRef<HTMLDivElement>(null);
    const topTextRef = useRef<HTMLDivElement>(null);
    const paragraphOneRef = useRef<HTMLDivElement>(null);
    const paragraphTwoRef = useRef<HTMLDivElement>(null);
    const paragraphThreeRef = useRef<HTMLUListElement>(null);
  
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
            <div ref={topSectionRef} className={styles.wrapper}>
                <div ref={topImageRef} className={styles.image_wrapper}>
                    <Image alt='' fill src='/images/private_sector.jpg' />
                </div>
                <div className={styles.private_sector_details}>
                    <h2 ref={paragraphOneRef}>For Private Sector</h2>
                    <h3 ref={paragraphTwoRef}>
                        The private sector plays a pivotal role in shaping 
                        the digital future of governance, offering the 
                        technologies and expertise that enable seamless, 
                        efficient, and secure public service delivery. 
                        Partnering with Africa Govtech Week provides 
                        businesses with the opportunity to:
                    </h3>
                    <ul ref={paragraphThreeRef}>
                        {privateSectorDetails?.map((details: string, index: number) =>
                            <li key={index}>{details}</li>
                        )}
                    </ul>
                </div>
            </div>
            <div className={styles.divider}></div>
            {/* <DetailedPairDisplay image1='/images/private_sector.jpg' divider
                className={styles.wrapper}
                TextDetails1={
                }
            /> */}
        </div>
    </section>
  )
}

export default PrivateSector