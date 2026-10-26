import useCountdownTimer from "@/hooks/useCountdownTimer";
import styles from "./CountDown.module.scss";

// Target date: June 1, 2027 00:00:00 UTC (1811808000000 ms)
const JUNE_2027_MS = new Date("2027-06-01T00:00:00Z").getTime();

interface CountDownProps {
    targetTimeMs?: number;
}

const CountDown = ({ targetTimeMs = JUNE_2027_MS }: CountDownProps) => {
    const { months, days, hours, minutes, seconds } = useCountdownTimer(targetTimeMs);
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