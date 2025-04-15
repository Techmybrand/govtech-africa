import { ContactUs, Registration } from '@/components'
import { HeroComponent } from '@/shared'
import React from 'react'

const ContactView = () => {
  return (
    <>
      <HeroComponent subText='' 
        title='Reach out to us today!' 
        type='small'
        backgroundImage='/images/hero-3.jpeg'
      />
      <ContactUs />
      <Registration />
    </>
  )
}

export default ContactView