import React from 'react';
import { Registration, Media } from '@/components';
import { HeroComponent, MediaForm } from '@/shared';

const MediaView = () => {
  return (
    <>
      <HeroComponent title='Stay Updated/Get a Media Pass'
        subText={`Powering Africa’s public sector digitisation`}
        type='small'
        backgroundImage='/images/hero-3.jpeg'
        overlay={true}
      />
      <Media />
      <MediaForm title='Want to Provide Media Coverage?' />
      <Registration />
    </>
  )
}

export default MediaView