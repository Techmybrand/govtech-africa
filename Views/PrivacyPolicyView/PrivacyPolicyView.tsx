import React from 'react';
import { PrivacyPolicy } from '@/components';
import { HeroComponent } from '@/shared';

const PrivacyPolicyView = () => {
  return (
    <>
      <HeroComponent subText={`Powering Africa's public sector digitisation`}
        title='Africa Govtech Week' 
        type='small'
        backgroundImage='/images/hero-3.jpeg'
        overlay={true}
      />
      <PrivacyPolicy />
    </>
  )
}

export default PrivacyPolicyView