import React from 'react';
import { CustomLink, DetailedPairDisplay } from '@/shared';
import styles from './ThemeCards.module.scss';

const ThemeCards = () => {
  return (
    <div className={styles.theme_cards_container}>
        <DetailedPairDisplay reverseTopSection
            image1='/images/chairs.png'
            image2='/images/stairs.png'
            TextDetails1={
                <div className={styles.text_details}>
                    <h3>
                        Africa Govtech Week is a high-level, week-long 
                        conference and exhibition bringing together government 
                        leaders, private sector innovators and financiers, 
                        development partners, and civil society to channel conversations 
                        around government technology and help shape the future of governance 
                        in Africa.
                    </h3>
                    <br />
                    <h3>
                        With a focus on leveraging innovation and the digital 
                        economy to deliver citizen-centric public services, 
                        the event will highlight the transformative power of technology 
                        in powering inclusive, transparent, and effective governance across 
                        the continent.
                    </h3>
                </div>
        } 
        TextDetails2={
            <div className={styles.theme_details}>
                <div className={styles.green_line}></div>
                <h3>2025 Theme</h3>
                <h6>
                    The government and private sector led event will provide 
                    a platform for knowledge sharing, networking, as well as 
                    robust policy engagements under the theme —
                </h6>
                <div className={styles.theme_details_text}>
                    <h4>Enabling Government Excellence in  Africa: </h4>
                    <p>Harnessing the Power of Technology and the Digital Economy for Shared Prosperity</p>
                </div>
                <div className={styles.link_container}>
                    <CustomLink label='Learn more' href='/learn-more' />
                </div>
            </div>
        } 
        />
    </div>
  )
}

export default ThemeCards