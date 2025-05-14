import React from 'react';
import { HeroComponent } from '@/shared';
import { ContactUs, Registration } from '@/components';

const ContactView = () => {
  return (
    <>
      <HeroComponent subText=''
        title='Get in touch today!'
        type='small'
        backgroundImage='/images/hero-3.jpeg'
        overlay={true}
      />
      <ContactUs />
      <Registration />
    </>
  )
}

export default ContactView