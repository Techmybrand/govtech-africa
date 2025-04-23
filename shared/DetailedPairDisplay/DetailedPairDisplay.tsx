'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './DetailedPairDisplay.module.scss';

gsap.registerPlugin(ScrollTrigger);

interface Props {
    image1: string
    image2?: string
    TextDetails1: React.ReactNode
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

    useEffect(() => {
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
                threshold: 0.2,
            }
        );

        const topSection = topSectionRef.current;
        if (topSection) {
            observer.observe(topSection);
        }

        const bottomSection = bottomSectionRef.current;
        if (bottomSection) {
            observer.observe(bottomSection);
        }
        return () => {
            if (topSection) observer.unobserve(topSection);
            if (bottomSection) observer.unobserve(bottomSection);
            observer.disconnect();
        };
    }, []);

  return (
    <div className={styles.detailed_pair_display_container}>
        <div data-type={reverseTopSection}
            className={`${styles.wrapper} ${className}`}
            ref={topSectionRef}
        >
            <div className={`${styles.card} ${styles.image_wrapper}`}>
                <Image src={image1} fill alt="Detailed Pair Display" />
            </div>
            <div className={`${styles.card} ${styles.text_details}`}>
                {TextDetails1}
            </div>
        </div>
        <div data-type={divider} className={styles.divider}></div>
        {TextDetails2 && (
            <div data-type={reverseBottomSection}
                className={`${styles.wrapper_reverse} ${className2}`}
                ref={bottomSectionRef}
            >
                <div className={`${styles.card2} ${styles.text_details}`}>
                    {TextDetails2}
                </div>
                <div className={`${styles.card2} ${styles.image_wrapper}`}>
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