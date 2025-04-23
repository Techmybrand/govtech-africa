'use client';
import React from 'react';
import { CustomLink, DetailedPairDisplay } from '@/shared';
import styles from './BecomeASponsor.module.scss';

const BecomeASponsor = () => {
  return (
    <section className={styles.container}>
        <DetailedPairDisplay
            className={styles.wrapper}
            image1='/images/sponsor.png'
            TextDetails1={
                <div className={styles.text_details}>
                    <h1>Become a Sponsor</h1>
                    <div className={styles.text_body}>
                        <h3>
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
                        <h3>
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
                        <h3>
                            By partnering with AGW 2025, sponsors don’t just 
                            support a conference—they become integral players 
                            in shaping Africa’s digital governance future. 
                            This is more than sponsorship; it’s a commitment 
                            to innovation, policy leadership, and transformative 
                            impact across the continent.
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

export default BecomeASponsor;