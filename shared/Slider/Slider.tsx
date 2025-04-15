import React from 'react';
import Image from 'next/image';
import styles from './Slider.module.scss'

const Slider = () => {
  return (
    <div className={styles.slides}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
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