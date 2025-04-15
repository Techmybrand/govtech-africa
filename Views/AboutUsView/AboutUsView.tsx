import React from 'react';
import { ConferenceHighlights, CrossRoads, Participation, Partners, Registration } from '@/components';
import { BookATicket, HeroComponent, Slider } from '@/shared';

const AboutUsView = () => {
  return (
    <>
      <HeroComponent title={`Hosted for Africa, by Africans`}
        subText={`A digital public sector for Africa is no longer optional—-it is the lever 
          of governance that serves, empowers, and transforms.
          At the Africa Govtech Week, we are bent on our mission to drive the 
          digital transformation of Africa's public sector.
        `}
        backgroundImage='/images/hero-2.jpeg'
      />
      <BookATicket />
      <CrossRoads />
      <Participation />
      <ConferenceHighlights />
      <Slider />
      <Partners />
      <Registration />
    </>
  )
}

export default AboutUsView