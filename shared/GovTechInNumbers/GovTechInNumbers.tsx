import React from 'react';
import styles from './GovTechInNumbers.module.scss'
import Image from 'next/image';

const GovTechInNumbers = () => {
  return (
    <section className={styles.africa}>
        <div className={styles.text}>
            <h1>Africa Govtech Week in Numbers</h1>
        </div>
        <div className={styles.row}>
            <div className={styles.grid}>
                <div className={styles.text}>
                    <h2>200+</h2>
                    <p>African Public and Private Sector Leaders </p>
                </div>
                <div className={styles.text}>
                    <h2>3000+</h2>
                    <p>VIP and Delegate Participants</p>
                </div>
                <div className={styles.text}>
                    <h2>50+</h2>
                    <p>Exhibiting companies</p>
                </div>
                <div className={styles.text}>
                    <h2>15+</h2>
                    <p>Technical and commercial sessions/forums/fireside chats</p>
                </div>
                <div className={styles.text}>
                    <h2>5</h2>
                    <p>Days of week-long engagements</p>
                </div>
                <div className={styles.text}>
                    <h2>3</h2>
                    <p>
                        days of core conferencing, exhibition, and networking
                        parleys{" "}
                    </p>
                </div>
            </div>
            <div className={styles.image}>
                <Image src="/images/africa.png" fill alt="" />
            </div>
        </div>
        <div className={styles.image_background__container}>
            <div className={styles.image_background}>
                <Image src="/images/africa-background.png" fill alt="" />
            </div>
        </div>
    </section>
  )
}

export default GovTechInNumbers