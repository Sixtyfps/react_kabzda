import * as React from 'react';
import styles from './AnalogClock.module.css'

export default function AnalogClock() {
    const [time, setTime] = React.useState(() => {
        let currentDate = new Date();
        return {
            hours: currentDate.getHours(),
            minutes: currentDate.getMinutes(),
            seconds: currentDate.getSeconds(),
        };
    });

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const currenTimeObject = {
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds(),
            };
            setTime(currenTimeObject);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={styles.clockWrapper}>
            <div className={styles.clock}>
                <div
                    className={styles.hours}
                    style={{
                        transform: `rotate(${time.hours * 30 - 90}deg) translateX(-10px)`,
                    }}
                ></div>
                <div
                    className={styles.minutes}
                    style={{
                        transform: `rotate(${time.minutes * 6 - 90}deg) translateX(-15px)`,
                    }}
                ></div>
                <div
                    className={styles.seconds}
                    style={{
                        transform: `rotate(${time.seconds * 6 - 90}deg) translateX(-15px)`,
                    }}
                ></div>
            </div>
        </div>
    );
}
