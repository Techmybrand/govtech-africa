'use client';
import React from 'react';
import styles from './BookAStand.module.scss';
import { CustomLink, DetailedPairDisplay } from '@/shared';

const BookAStand = () => {
  return (
    <section className={styles.container}>
        <DetailedPairDisplay
            className={styles.wrapper}
            image1='/images/book_a_stand.png'
            TextDetails1={
                <div className={styles.text_details}>
                    <h1>Looking to showcase your brand without a Sponsorship commitment?</h1>
                    <h1>Book a stand!</h1>
                    <div className={styles.text_body}>
                        <h3>
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
                        <h3>
                            This space provides a unique opportunity for 
                            government MDAs, technology service providers, 
                            startups, multinational corporations, and 
                            development organizations to demonstrate how 
                            their solutions can revolutionize public service 
                            delivery, digital governance, and citizen 
                            engagement.
                        </h3>
                        <h3>
                            With a range of customizable exhibition options, 
                            exhibitors can create immersive and interactive 
                            experiences that highlight their expertise, 
                            technological advancements, and strategic contributions 
                            to Africa’s digital transformation. Whether through live 
                            demos, product launches, or networking activations, this 
                            is the perfect stage to engage with over 3,000+ 
                            high-profile participants from across Africa and beyond.
                        </h3>
                        <h3>
                            Secure your space today and position your 
                            organization at the forefront of Africa’s 
                            govtech revolution.
                        </h3>
                    </div>
                    <CustomLink href=''
                        label='Request sponsorship packages'
                        color='black'
                        className={styles.custom_link_class}
                    />
                </div>
            }
        />
    </section>
  )
}

export default BookAStand;
