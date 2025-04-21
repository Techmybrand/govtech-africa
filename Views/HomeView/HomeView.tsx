import React from 'react';
import { BookATicket, Carousel, CountDown, GovTechInNumbers, HeroComponent } from '@/shared'
import { Continent, Expectation, Participation, Partners, Registration, ThemeCards } from '@/components';

const HomeView = () => {
  const items = ['/svgs/slider.svg',
    '/svgs/slider.svg',
    '/svgs/slider.svg',
    '/svgs/slider.svg',
    '/svgs/slider.svg',
    '/svgs/slider.svg',
  ]
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
      {/* <Slider /> */}
      <Carousel items={items} direction='left' speed='slow' />
      <Partners />
      <Registration />
    </>
  )
}

export default HomeView