'use client';
import React, { useRef, useEffect } from 'react';
import { CustomLink } from '@/shared';
import Image from 'next/image';
import styles from './BookAStand.module.scss';

const BookAStand = () => {
    const topSectionRef = useRef<HTMLDivElement>(null);
    const topImageRef = useRef<HTMLDivElement>(null);
    const topTextRef = useRef<HTMLDivElement>(null);
    const secondTextRef = useRef<HTMLDivElement>(null);
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
        const secondText = secondTextRef.current
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
            if (secondText) cardObserver.observe(secondText);
            if (firstParagragph) cardObserver.observe(firstParagragph);
            if (secondParagraph) cardObserver.observe(secondParagraph);
            if (thirdParagraph) cardObserver.observe(thirdParagraph);
            if (fourthParagraph) cardObserver.observe(fourthParagraph);
            if (linkSection) cardObserver.observe(linkSection);
        } else {
            if (topImage) cardObserver.unobserve(topImage);
            if (topText) cardObserver.unobserve(topText);
            if (secondText) cardObserver.unobserve(secondText);
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
            if (secondText) cardObserver.unobserve(secondText);
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
    <section id='book-a-stand' className={styles.section_wrapper}>
        <div className={styles.container}>
            <div ref={topSectionRef} className={styles.wrapper}>
                <div ref={topImageRef} className={styles.image_wrapper}>
                    <Image alt='' fill src='/images/book_a_stand1.jpg' />
                </div>
                <div className={styles.text_details}>
                    <h1 ref={topTextRef}>Looking to showcase your brand without a Sponsorship commitment?</h1>
                    <h2 ref={secondTextRef}>Book a stand!</h2>
                    <div className={styles.text_body}>
                        <h3 className={styles.paragraph_1} ref={paragraphOneRef}>
                            {`
                                Africa Govtech Week 2025 offers a premier 
                                platform for organizations to showcase cutting-edge 
                                innovations in government technology. The exhibition 
                                area is open to all attendees and is strategically positioned 
                                at the heart of the conference, ensuring maximum visibility 
                                and engagement with key decision-makers, policymakers, and 
                                technology leaders.
                            `}
                        </h3>
                        <h3 className={styles.paragraph_2} ref={paragraphTwoRef}>
                            This space provides a unique opportunity for 
                            government MDAs, technology service providers, 
                            startups, multinational corporations, and 
                            development organizations to demonstrate how 
                            their solutions can revolutionize public service 
                            delivery, digital governance, and citizen 
                            engagement.
                        </h3>
                        <h3 className={styles.paragraph_3} ref={paragraphThreeRef}>
                            With a range of customizable exhibition options, 
                            exhibitors can create immersive and interactive 
                            experiences that highlight their expertise, 
                            technological advancements, and strategic contributions 
                            to Africa’s digital transformation. Whether through live 
                            demos, product launches, or networking activations, this 
                            is the perfect stage to engage with over 3,000+ 
                            high-profile participants from across Africa and beyond.
                        </h3>
                        <h3 className={styles.paragraph_4} ref={paragraphFourRef}>
                            Secure your space today and position your 
                            organization at the forefront of Africa’s 
                            govtech revolution.
                        </h3>
                    </div>
                    <div ref={customLinkRef} className={styles.custom_link_container}>
                        <CustomLink href='' color='black' subType='black'
                            label='Request sponsorship packages'
                            className={styles.custom_link_class}
                        />
                    </div>
                </div>
            </div>
        </div>
        {/* <DetailedPairDisplay
            className={styles.wrapper}
            image1='/images/book_a_stand1.jpg'
            TextDetails1={
            }
        /> */}
    </section>
  )
}

export default BookAStand;
