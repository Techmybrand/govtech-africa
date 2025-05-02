import React from 'react';
import { DetailedPairDisplay } from '@/shared';
import styles from './AfricanOpportunity.module.scss';

const AfricanOpportunity = () => {
  return (
    <div className={styles.theme_cards_container}>
      <div className={styles.cards_container_wrapper}>
        <div className={styles.first_container}>
          <DetailedPairDisplay reverseBottomSection
            image2='/images/crossroads2.png'
            className2={styles.wrapper_class_reverse}
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
      </div>
    </div>
  )
}

export default AfricanOpportunity