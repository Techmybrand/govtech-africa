'use client';
import React, { useEffect, useRef } from 'react';
import { animateCounter } from '@/utils/animateCounter';
import { stats } from '@/mock/navLists.mock';
import { StatItem } from '@/interfaces';
import Image from 'next/image';
import styles from './GovTechInNumbers.module.scss';

const GovTechInNumbers = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const hasAnimated = useRef<boolean>(false);
    useEffect(() => {
        const currentSection = sectionRef.current
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    const counters = sectionRef.current?.querySelectorAll('[data-count]');
                    counters?.forEach((counter) => {
                        const target = parseInt(counter.getAttribute('data-count') || '0');
                            animateCounter(counter as HTMLElement, 0, target, 3000); // 2 seconds
                        }
                    );
                    hasAnimated.current = true;
                }
                });
            },
            { threshold: 0.3 }
        );

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);
  return (
    <section ref={sectionRef} className={styles.africa}>
        <div className={styles.header}>
            <h1>Africa Govtech Week in Numbers</h1>
        </div>
        <div className={styles.row}>
            <div className={styles.grid}>
                {stats.map((stat: StatItem, index: number) =>
                    <div key={index} className={styles.text}>
                        <h2 data-count={stat.value}>0</h2>
                        <p>{stat.label}</p>
                    </div>
                )}
            </div>
            <div className={styles.image}>
                <Image src="/images/africa.png" fill alt="" />
            </div>
        </div>
        <div className={styles.image_background__container}>
            <div className={styles.image_background}>
                <Image src="/svgs/footer_bg_lg.svg" fill alt="" />
            </div>
        </div>
    </section>
  )
}

export default GovTechInNumbers