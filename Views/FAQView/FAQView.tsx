import { FAQComponent, Registration } from '@/components'
import { HeroComponent } from '@/shared'
import React from 'react'

const FAQView = () => {
  return (
    <>
      <HeroComponent subText={`Powering Africa's public sector digitisation`}
        title='Africa Govtech Week' 
        type='small'
        backgroundImage='/images/hero-3.jpeg'
        overlay={true}
      />
      <FAQComponent />
      <Registration />
    </>
  )
}

export default FAQView