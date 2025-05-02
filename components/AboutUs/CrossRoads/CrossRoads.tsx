import React from 'react';
import { DetailedPairDisplay } from '@/shared';
import styles from './CrossRoads.module.scss';

const CrossRoads = () => {
  return (
    <div className={styles.theme_cards_container}>
      <div className={styles.cards_container_wrapper}>
        <div className={styles.first_container}>
          <DetailedPairDisplay reverseBottomSection divider
            image1='/images/expectations.jpg'
            className={styles.wrapper_class}
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
          />
        </div>
      </div>
    </div>
  )
}

export default CrossRoads;
