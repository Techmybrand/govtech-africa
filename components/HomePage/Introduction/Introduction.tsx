import React from 'react';
import { DetailedPairDisplay } from '@/shared';
import styles from './Introduction.module.scss';

const Introduction = () => {
  return (
    <div className={styles.theme_cards_container}>
        <DetailedPairDisplay reverseTopSection
            image1='/images/theme.jpg'
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
        />
    </div>
  )
}

export default Introduction