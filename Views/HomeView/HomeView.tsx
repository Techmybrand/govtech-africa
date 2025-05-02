import React from 'react';
import { BookATicket, Carousel, CountDown, GovTechInNumbers, HeroComponent } from '@/shared'
import { Continent, Expectation, Introduction, Participation, Partners, Registration, ThemeCards } from '@/components';
import styles from './HomeView.module.scss'

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
        headerTitleClass={styles.header_title_class}
      />
      <BookATicket />
      <Introduction />
      <ThemeCards />
      <CountDown />
      <GovTechInNumbers />
      <Continent />
      <Expectation />
      <Participation />
      <Carousel items={items} direction='left' speed='slow' />
      <Partners />
      <Registration />
    </>
  )
}

export default HomeView