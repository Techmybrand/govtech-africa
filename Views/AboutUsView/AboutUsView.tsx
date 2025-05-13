import React from 'react';
import { AfricanOpportunity, ConferenceHighlights, CrossRoads, EventDetails, Participation, Partners, Registration } from '@/components';
import { BookATicket, Carousel, HeroComponent } from '@/shared';
import styles from './AboutUsView.module.scss';

const AboutUsView = () => {
  const items = ['/svgs/slider.svg',
    '/svgs/slider.svg',
    '/svgs/slider.svg',
    '/svgs/slider.svg',
    '/svgs/slider.svg',
    '/svgs/slider.svg',
  ]
  return (
    <>
      <HeroComponent title={`Hosted for Africa, by Africans`}
        subText={
          <div className={styles.hero_subtext}>
            <p className={styles.subtext_lg}>
              {`A digital public sector for Africa is no longer optional—-it is the lever 
              of governance that serves, empowers, and transforms.
              At the Africa Govtech Week, we are bent on our mission to drive the 
              digital transformation of Africa's public sector.`}
            </p>
            <p className={styles.subtext_mobile}>
              {`A digital public sector for Africa is no longer optional—-it is the lever 
              of governance that serves, empowers, and transforms.`}
              <br />
              <br />
              {`At the Africa Govtech Week, we are bent on our mission to drive the 
              digital transformation of Africa's public sector.`}
            </p>
          </div>
        }
        backgroundImage='/images/hero_for_about.png'
        headerSubtextClass={styles.header_subtext_class}
        headerTitleClass={styles.header_title_class}
      />
      <BookATicket />
      <CrossRoads />
      <AfricanOpportunity />
      <EventDetails />
      <Participation />
      <ConferenceHighlights />
      <Carousel items={items} direction='left' speed='slow' />
      <Partners />
      <Registration />
    </>
  )
}

export default AboutUsView