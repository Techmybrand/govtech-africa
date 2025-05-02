import React from 'react';
import { DetailedPairDisplay } from '@/shared';
import styles from './Organisations.module.scss';
import { organisationDetails } from '@/mock/navLists.mock';

const Organisations = () => {
    
  return (
    <section className={styles.why_partner_container}>
        <div className={styles.why_partner_wrapper}>
            <DetailedPairDisplay
                image2='/images/organisations.png'
                className2={styles.wrapper_reverse}
                TextDetails2={
                    <div className={styles.organisations_details}>
                        <h2>For International Development Organizations</h2>
                        <h3>
                            For global and regional development organizations, 
                            supporting govtech initiatives is essential to 
                            achieving broader socio-economic development goals. 
                            By partnering with Africa Govtech Week, development 
                            partners can:
                        </h3>
                        <ul>
                            {organisationDetails?.map((details: string, index: number) =>
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

export default Organisations