'use client';
import React, { useRef, useEffect } from 'react';
import { organisationDetails } from '@/mock/navLists.mock';
import Image from 'next/image';
import styles from './Organisations.module.scss';

const Organisations = () => {
    const topSectionRef = useRef<HTMLDivElement>(null);
    const topImageRef = useRef<HTMLDivElement>(null);
    const topTextRef = useRef<HTMLDivElement>(null);
    const paragraphOneRef = useRef<HTMLDivElement>(null);
    const paragraphTwoRef = useRef<HTMLDivElement>(null);
    const paragraphThreeRef = useRef<HTMLUListElement>(null);
    const paragraphFourRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const isMobile = () => window.innerWidth <= 650;
        const topSection = topSectionRef.current;
        const topImage = topImageRef.current;
        const topText = topTextRef.current;
        const firstParagragph = paragraphOneRef.current;
        const secondParagraph = paragraphTwoRef.current;
        const thirdParagraph = paragraphThreeRef.current
        const fourthParagraph = paragraphFourRef.current

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
        } else {
            if (topImage) cardObserver.unobserve(topImage);
            if (topText) cardObserver.unobserve(topText);
            if (firstParagragph) cardObserver.unobserve(firstParagragph);
            if (secondParagraph) cardObserver.unobserve(secondParagraph);
            if (thirdParagraph) cardObserver.unobserve(thirdParagraph);
            if (fourthParagraph) cardObserver.unobserve(fourthParagraph);
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
            <div ref={topSectionRef} className={styles.wrapper_reverse}>
                <div className={styles.organisations_details}>
                    <h2 ref={paragraphOneRef}>For International Development Organizations</h2>
                    <h3 ref={paragraphTwoRef}>
                        For global and regional development organizations, 
                        supporting govtech initiatives is essential to 
                        achieving broader socio-economic development goals. 
                        By partnering with Africa Govtech Week, development 
                        partners can:
                    </h3>
                    <ul ref={paragraphThreeRef}>
                        {organisationDetails?.map((details: string, index: number) =>
                            <li key={index}>
                                {details}
                            </li>
                        )}
                    </ul>
                </div>
                <div ref={topImageRef} className={styles.image_wrapper}>
                    <Image alt='' fill src='/images/organisations.png' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Organisations