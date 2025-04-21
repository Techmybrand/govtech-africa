import React from 'react';
import { BecomeASponsor, BookAStand, Contact, Registration, WhyPartner } from '@/components'
import { BookATicket, HeroComponent, Slider } from '@/shared'

const PartnerView = () => {
  return (
    <>
      <HeroComponent title='A New Era for African governance'
        subText={`Just us as we chart the course for Africa's 
          public sector renaissance`}
        backgroundImage='/images/hero-1.jpeg'
      />
      <BookATicket />
      <WhyPartner />
      <Contact />
      <BecomeASponsor />
      <Slider />
      <BookAStand />
      <Slider />
      <Registration />
    </>
  )
}

export default PartnerView;