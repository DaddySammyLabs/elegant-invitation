import { useEffect, useState } from "react";
import styles from "./Timer.module.css";

const weddingDate = new Date("2027-06-20T16:00:00");

function calculateTime() {
  const now = new Date();
  const difference = weddingDate - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function Timer() {
  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeItems = [
    { value: time.days, label: "ДНЕЙ" },
    { value: time.hours, label: "ЧАСОВ" },
    { value: time.minutes, label: "МИНУТ" },
    { value: time.seconds, label: "СЕКУНД" },
  ];

  return (
    <section className={styles.timer} id="timer">
      <div className={styles.content}>
        <p className={styles.subtitle}>COUNTDOWN TO OUR WEDDING</p>

        <h2 className={styles.title}>До нашего счастья осталось</h2>

        <div className={styles.counter}>
          {timeItems.map((item) => (
            <div className={styles.counterItem} key={item.label}>
              <span className={styles.number}>
                {String(item.value).padStart(2, "0")}
              </span>

              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.divider}></div>

        <p className={styles.date}>20 ИЮНЯ 2027</p>
      </div>
    </section>
  );
}

export default Timer;
