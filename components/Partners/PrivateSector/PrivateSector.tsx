import React from 'react';
import { DetailedPairDisplay } from '@/shared';
import styles from './PrivateSector.module.scss';
import { privateSectorDetails } from '@/mock/navLists.mock';

const PrivateSector = () => {
    
  return (
    <section className={styles.why_partner_container}>
        <div className={styles.why_partner_wrapper}>
            <DetailedPairDisplay image1='/images/private_sector.jpg' divider
                className={styles.wrapper}
                TextDetails1={
                    <div className={styles.private_sector_details}>
                        <h2>For Private Sector</h2>
                        <h3>
                            The private sector plays a pivotal role in shaping 
                            the digital future of governance, offering the 
                            technologies and expertise that enable seamless, 
                            efficient, and secure public service delivery. 
                            Partnering with Africa Govtech Week provides 
                            businesses with the opportunity to:
                        </h3>
                        <ul>
                            {privateSectorDetails?.map((details: string, index: number) =>
                                <li key={index}>{details}</li>
                            )}
                        </ul>
                    </div>
                }
            />
        </div>
    </section>
  )
}

export default PrivateSector