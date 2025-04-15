import React from 'react';
import { BecomeASponsor, BookAStand, Contact, Registration, WhyPartner } from '@/components'
import { BookATicket, HeroComponent, Slider } from '@/shared'

const PartnerView = () => {
  return (
    <>
      <HeroComponent title='Africa GovTech Week'
        subText={`Powering Africa's public sector digitisation`}
        backgroundImage='/images/hero-1.jpeg'
      />
      <BookATicket />
      <WhyPartner />
      <Contact />
      <BecomeASponsor />
      <BookAStand />
      <Slider />
      <Registration />
    </>
  )
}

export default PartnerView;