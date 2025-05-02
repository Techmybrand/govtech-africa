'use client';
import React, { useEffect, useRef } from 'react';
import { DetailedPairDisplay } from '@/shared';
import styles from './WhyPartner.module.scss';
import { govtDetails } from '@/mock/navLists.mock';

const WhyPartner = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    
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
            <DetailedPairDisplay image1='/images/government.png'
                className={styles.__wrapper}
                TextDetails1={
                    <div className={styles.government_details}>
                        <h2>For African Governments -</h2>
                        <h3>
                            For African governments, digital transformation is 
                            no longer optional—it is essential for efficient, 
                            transparent, and citizen-centric governance. 
                            By partnering with Africa Govtech Week, governments 
                            will:
                        </h3>
                        <ul>
                            {govtDetails?.map((details: string, index: number) =>
                                <li key={index}>{details}</li>
                            )}
                        </ul>
                    </div>
                }
            />
            <div className={styles.divider}></div>
        </div>
    </section>
  )
}

export default WhyPartner; 