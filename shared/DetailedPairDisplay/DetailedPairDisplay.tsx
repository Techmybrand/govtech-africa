'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './DetailedPairDisplay.module.scss';
interface Props {
    image1?: string
    image2?: string
    TextDetails1?: React.ReactNode
    TextDetails2?: React.ReactNode
    reverseTopSection?: boolean
    reverseBottomSection?: boolean
    divider?: boolean
    className?: string
    className2?: string
}

const DetailedPairDisplay = ({image2, image1, TextDetails1, TextDetails2, 
    divider, reverseBottomSection = false, reverseTopSection = false,
    className, className2}: Props) => {
    const topSectionRef = useRef<HTMLDivElement>(null);
    const bottomSectionRef = useRef<HTMLDivElement>(null);
    const topImageRef = useRef<HTMLDivElement>(null);
    const topTextRef = useRef<HTMLDivElement>(null);
    const bottomImageRef = useRef<HTMLDivElement>(null);
    const bottomTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const isMobile = () => window.innerWidth <= 650;
        const topSection = topSectionRef.current;
        const bottomSection = bottomSectionRef.current;
        const topImage = topImageRef.current;
        const topText = topTextRef.current;
        const bottomImage = bottomImageRef.current;
        const bottomText = bottomTextRef.current;

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
                if (bottomSection) observer.unobserve(bottomSection);
                if (topImage) cardObserver.observe(topImage);
                if (topText) cardObserver.observe(topText);
                if (bottomImage) cardObserver.observe(bottomImage);
                if (bottomText) cardObserver.observe(bottomText);
            } else {
                if (topImage) cardObserver.unobserve(topImage);
                if (topText) cardObserver.unobserve(topText);
                if (bottomImage) cardObserver.unobserve(bottomImage);
                if (bottomText) cardObserver.unobserve(bottomText);
                if (topSection) observer.observe(topSection);
                if (bottomSection) observer.observe(bottomSection);
            }
        }

        setupObservers();

        window.addEventListener('resize', setupObservers);

        return () => {
            window.removeEventListener('resize', setupObservers);
            if (isMobile()) {
                if (topImage) cardObserver.unobserve(topImage);
                if (topText) cardObserver.unobserve(topText);
                if (bottomImage) cardObserver.unobserve(bottomImage);
                if (bottomText) cardObserver.unobserve(bottomText);
                cardObserver.disconnect();
            } else {
                if (topSection) observer.unobserve(topSection);
                if (bottomSection) observer.unobserve(bottomSection);
                observer.disconnect();
            }
        };
    }, []);

  return (
    <div className={styles.detailed_pair_display_container}>
        {TextDetails1 && (
            <div data-type={reverseTopSection}
                className={`${styles.wrapper} ${className}`}
                ref={topSectionRef}
            >
                {image1 && (
                    <div ref={topImageRef} className={`${styles.card} ${styles.image_wrapper}`}>
                        <Image src={image1} fill alt="Detailed Pair Display" />
                    </div>
                )}
                <div ref={topTextRef} className={`${styles.card} ${styles.text_details}`}>
                    {TextDetails1}
                </div>
            </div>
        )}
        <div data-type={divider} className={styles.divider}></div>
        {TextDetails2 && (
            <div data-type={reverseBottomSection}
                className={`${styles.wrapper_reverse} ${className2}`}
                ref={bottomSectionRef}
            >
                <div ref={bottomTextRef} className={`${styles.card2} ${styles.text_details}`}>
                    {TextDetails2}
                </div>
                <div ref={bottomImageRef} className={`${styles.card2} ${styles.image_wrapper}`}>
                    {image2 && (
                        <Image src={image2} fill alt="Detailed Pair Display" />
                    )}
                </div>
            </div>
        )}
        <div></div>
    </div>
  )
}

export default DetailedPairDisplay