import React from 'react';
import Image from 'next/image';
import styles from './Slider.module.scss'
import { slidesArray } from '@/mock/navLists.mock';

const Slider = () => {
  
  return (
    <div className={styles.slides}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number) => (
        <div key={item} className={styles.slide}>
          <Image
            quality={100}
            priority
            src="/images/slide.png"
            alt="Govtech"
            fill
          />
        </div>
      ))}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number) => (
        <div key={item} className={styles.slide}>
          <Image
            quality={100}
            priority
            src="/images/slide.png"
            alt="Govtech"
            fill
          />
        </div>
      ))}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number) => (
        <div key={item} className={styles.slide}>
          <Image
            quality={100}
            priority
            src="/images/slide.png"
            alt="Govtech"
            fill
          />
        </div>
      ))}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number) => (
        <div key={item} className={styles.slide}>
          <Image
            quality={100}
            priority
            src="/images/slide.png"
            alt="Govtech"
            fill
          />
        </div>
      ))}
    </div>
  )
}

export default Slider