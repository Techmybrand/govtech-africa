import React from 'react';
import { CustomLink, DetailedPairDisplay } from '@/shared';
import styles from './ThemeCards.module.scss';

const ThemeCards = () => {
  return (
    <div className={styles.theme_cards_container}>
        <DetailedPairDisplay reverseTopSection
            image2='/images/govt_excel.png'
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
                        <CustomLink label='Learn more' href='/about-us#theme' />
                    </div>
                </div>
            }
        />
    </div>
  )
}

export default ThemeCards