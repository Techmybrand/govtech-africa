import React from 'react';
import styles from './CountDown.module.scss';
import useCountdownTimer from '@/hooks/useCountdownTimer';

const CountDown = () => {
    const { months, days, hours, minutes, seconds
    } = useCountdownTimer(1794265200000);
    // console.log('nov: ', new Date("2026-11-10T00:00:00").getTime())
  return (
    <div className={styles.countdown_wrapper}>
        <div className={styles.countdown_container}>
            <div className={styles.countdown}>
                <div className={styles.text}>
                    <h6>COUNTDOWN</h6>
                </div>
                <div className={styles.countdown_text}>
                    <div className={styles.text}>
                        <h3>{months}</h3>
                        <p>Months</p>
                    </div>
                    <span>:</span>
                    <div className={styles.text}>
                        <h3>{days}</h3>
                        <p>Days</p>
                    </div>
                    <span>:</span>
                    <div className={styles.text}>
                        <h3>{hours}</h3>
                        <p>hrs</p>
                    </div>
                    <span>:</span>
                    <div className={styles.text}>
                        <h3>{minutes}</h3>
                        <p>Mins</p>
                    </div>
                    <span>:</span>
                    <div className={styles.text} style={{ color: "#14361B" }}>
                        <h3 style={{ color: "#14361B" }}>{seconds}</h3>
                        <p style={{ color: "#14361B" }}>Secs</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountDown