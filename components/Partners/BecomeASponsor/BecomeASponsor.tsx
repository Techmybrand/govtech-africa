'use client';
import React, { useEffect, useRef } from 'react';
import { CustomLink } from '@/shared';
import Image from 'next/image';
import styles from './BecomeASponsor.module.scss';

const BecomeASponsor = () => {
    const topSectionRef = useRef<HTMLDivElement>(null);
    const topImageRef = useRef<HTMLDivElement>(null);
    const topTextRef = useRef<HTMLDivElement>(null);
    const paragraphOneRef = useRef<HTMLDivElement>(null);
    const paragraphTwoRef = useRef<HTMLDivElement>(null);
    const paragraphThreeRef = useRef<HTMLDivElement>(null);
    const customLinkRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const isMobile = () => window.innerWidth <= 768;
        const topSection = topSectionRef.current;
        const topImage = topImageRef.current;
        const topText = topTextRef.current;
        const firstParagragph = paragraphOneRef.current;
        const secondParagraph = paragraphTwoRef.current;
        const thirdParagraph = paragraphThreeRef.current
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
            if (linkSection) cardObserver.observe(linkSection);
        } else {
            if (topImage) cardObserver.unobserve(topImage);
            if (topText) cardObserver.unobserve(topText);
            if (firstParagragph) cardObserver.unobserve(firstParagragph);
            if (secondParagraph) cardObserver.unobserve(secondParagraph);
            if (thirdParagraph) cardObserver.unobserve(thirdParagraph);
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
            if (linkSection) cardObserver.unobserve(linkSection);
            cardObserver.disconnect();
        } else {
            if (topSection) observer.unobserve(topSection);
            observer.disconnect();
        }
        };
    }, []);

  return (
    <section id='sponsor' className={styles.section_wrapper}>
        <div className={styles.container}>
            <div ref={topSectionRef} className={styles.wrapper}>
                <div ref={topImageRef} className={styles.image_wrapper}>
                    <Image alt='' fill src='/images/sponsor2.jpg' />
                </div>
                <div className={styles.text_details}>
                    <h1 ref={topTextRef}>Become a Sponsor</h1>
                    <div className={styles.text_body}>
                        <h3 className={styles.paragraph_1} ref={paragraphOneRef}>
                            {`
                                Africa Govtech Week 2025 redefines sponsorship 
                                by offering strategic, high-impact brand visibility 
                                across multiple platforms, venues, and engagement 
                                formats. Unlike traditional conference sponsorships, 
                                AGW 2025 provides tailored opportunities designed to 
                                amplify brand presence among key government stakeholders, 
                                technology leaders, and international development partners
                                driving Africa's digital transformation.
                            `}
                        </h3>
                        <h3 className={styles.paragraph_2} ref={paragraphTwoRef}>
                            Sponsorship at AGW’25 extends beyond the 
                            conference floor—your brand will gain prime 
                            exposure through high-profile speaking engagements, 
                            exclusive networking sessions, interactive digital 
                            platforms, and immersive brand activations. 
                            Opportunities include conference arenas, breakout 
                            sessions, workshops, VIP networking lounges, 
                            executive roundtables, gala receptions, and digital 
                            branding across AGW’s online platforms.
                        </h3>
                        <h3 className={styles.paragraph_3} ref={paragraphThreeRef}>
                            By partnering with AGW 2025, sponsors don’t just 
                            support a conference—they become integral players 
                            in shaping Africa’s digital governance future. 
                            This is more than sponsorship; it’s a commitment 
                            to innovation, policy leadership, and transformative 
                            impact across the continent.
                        </h3>
                    </div>
                    <div ref={customLinkRef} className={styles.custom_link_container}>
                        <CustomLink label='Request Sponsorship Packages' className={styles.custom_link_class}
                            href="mailto:info@africagovtechweek.com?body=Request Sponsorship Packages" color='black'
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default BecomeASponsor;