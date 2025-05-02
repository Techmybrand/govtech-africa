import React from 'react';
import { DetailedPairDisplay } from '@/shared';
import styles from './EventDetails.module.scss';

const EventDetails = () => {
  return (
    <div className={styles.theme_cards_container}>
      <div className={styles.cards_container_wrapper}>
        <div className={styles.theme_container}>
          <div className={styles.theme_container_content}>
            <h1>2025 Theme</h1>
            <div className={styles.subtext}>
              <h3>Enabling Government Excellence in Africa:</h3>
              <p>
                Harnessing the Power of Technology and the Digital 
                Economy for Shared Prosperity
              </p>
            </div>
          </div>
        </div>
        <div className={styles.event_details}>
          <DetailedPairDisplay reverseBottomSection divider
            image1='/images/about_event.jpg'
            className={styles.wrapper_class}
            TextDetails1={
              <div className={styles.event_details_text}>
                <h1>Event Details</h1>
                <h3>
                  {`The Africa Govtech Week is the continent's flagship 
                  government technology event, featuring 5 days of week-long 
                  engagements with over 15 conference panel sessions among 
                  other highlights. It will unite 200+ leaders, 100+ 
                  exhibitors and 3000+ participants from amongst African 
                  governments, private-sector innovators, investors, academia 
                  & research think-tanks, and global development partners. 
                  Together, participants will channel issues-based and 
                  solution-driven conversations, and co-design strategies 
                  to harness the digital economy for transparent, 
                  citizen-centric governance in Africa.`}
                </h3>
                <h3>
                  Key topics around digital public infrastructures, emerging 
                  technologies, cybersecurity and data protection, cloud-based 
                  governance, network connectivity, infrastructure financing, 
                  and overall digital transformation in Africa’s public sector 
                  will form the crux of discussions at the Africa Govtech Week.
                </h3>
                <h3>
                  The conference will also serve as a matchmaking hub for 
                  stakeholders, playing host to government technology 
                  exhibitions, networking social events, tailored trainings, 
                  and hackathons, among other supplementary highlights that 
                  will shimmer the conference to strike a memorable stroke on 
                  participants.
                </h3>
              </div>
            } 
          />
        </div>
      </div>
    </div>
  )
}

export default EventDetails