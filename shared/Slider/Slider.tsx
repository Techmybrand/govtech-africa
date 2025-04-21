import React from 'react';
import Image from 'next/image';
import styles from './Slider.module.scss';

const Slider = () => {
  
  return (
    <div className={styles.slides_wrapper}>
      <div className={styles.slides}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number) => (
          <React.Fragment key={item}>
            <div className={styles.slide}>
              <Image
                quality={100}
                priority
                src="/svgs/slider.svg"
                alt="Govtech"
                fill
              />
            </div>
            <div className={styles.slide}>
              <Image
                quality={100}
                priority
                src="/svgs/slider.svg"
                alt="Govtech"
                fill
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Slider