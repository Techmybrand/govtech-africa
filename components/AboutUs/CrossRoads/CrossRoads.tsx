import React from 'react';
import styles from './CrossRoads.module.scss'
import { DetailedPairDisplay } from '@/shared';

const CrossRoads = () => {
  return (
    <div className={styles.theme_cards_container}>
      <div className={styles.first_container}>
        <DetailedPairDisplay reverseBottomSection divider
          image1='/images/crossroads1.png'
          image2='/images/crossroads2.png'
          className={styles.wrapper_class}
          className2={styles.wrapper_class_reverse}
          TextDetails1={
            <div className={styles.text_details}>
              <h1>A Continent at Crossroads</h1>
              <h3>
                {`Africa's governance challenges are unique, but so is the 
                continent's potential. With 60% of its population under 25, 
                the continent's demographic dividend will depend largely on its 
                ability to deliver tech-enabled public services that empower 
                citizens, attract talent, and unlock economic growth.`}
              </h3>
              <h3>
                However, realizing this vision requires more than just 
                technological adoption—it demands bold policy choices, 
                strategic investments, and multi-stakeholder collaboration. 
                African governments must not only modernize public institutions 
                but also foster an ecosystem where innovation thrives, ensuring 
                that digital transformation leaves no one behind.
              </h3>
              <h3>
                The Africa Govtech Week will serve as the catalyst for this 
                transformation, bringing together policymakers, technologists,
                and development partners to co-create solutions that address 
                governance inefficiencies, enhance service delivery, and build 
                trust in digital governance. By anchoring discussions in practical 
                implementation and scalable solutions, the event will lay the 
                groundwork for sustainable, citizen-centric digital governance 
                across the continent.
              </h3>
            </div>
          } 
          TextDetails2={
            <div className={styles.theme_details}>
              <h3>The African Govtech Opportunity</h3>
              <h6>
                With the global technology and digital economy boom, Africa 
                has been afforded a rare opportunity to level the playing field 
                in terms of its development ratio relative to more developed 
                climes.
              </h6>
              <div className={styles.details_container}>
                <div className={styles.details}>
                  <h3>76%</h3>
                  <p>
                    of African governments are already integrating cloud-based public service platforms (IDC, 2024).
                  </p>
                </div>
                <div className={styles.details}>
                  <h3>$3.8 billion</h3>
                  <p>
                    projected growth in Africa’s digital governance market by 2030.
                  </p>
                </div>
                <div className={styles.details}>
                  <h3>70%</h3>
                  <p>
                    of public services in Africa are being digitized via mobile-based platforms (GSMA, 2024).
                  </p>
                </div>
              </div>
            </div>
          } 
        />
      </div>

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
          image1='/images/event_details.png'
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
  )
}

export default CrossRoads;
