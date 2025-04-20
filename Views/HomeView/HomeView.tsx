import React from 'react';
import { BookATicket, CountDown, GovTechInNumbers, HeroComponent, Slider } from '@/shared'
import { Continent, Expectation, Participation, Partners, Registration, ThemeCards } from '@/components';

const HomeView = () => {
  return (
    <>
      <HeroComponent title='Africa Govtech Week'
        subText={`Powering Africa's public sector digitisation`}
        backgroundImage='/images/hero-1.jpeg'
      />
      <BookATicket />
      <ThemeCards />
      <CountDown />
      <GovTechInNumbers />
      <Continent />
      <Expectation />
      <Participation />
      <Slider />
      <Partners />
      <Registration />
    </>
  )
}

export default HomeView