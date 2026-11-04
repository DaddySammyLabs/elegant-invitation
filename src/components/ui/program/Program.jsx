import styles from "./Program.module.css";

const events = [
  {
    time: "15:00",
    title: "Сбор гостей",
    description: "Встреча гостей, welcome-зона и лёгкие напитки.",
  },
  {
    time: "16:00",
    title: "Свадебная церемония",
    description: "Самый трогательный и важный момент нашего дня.",
  },
  {
    time: "17:00",
    title: "Поздравления и фотосессия",
    description: "Объятия, фотографии и тёплые пожелания.",
  },
  {
    time: "18:00",
    title: "Праздничный ужин",
    description: "Вкусная еда, приятная атмосфера и общение.",
  },
  {
    time: "20:00",
    title: "Первый танец",
    description: "Наш первый танец в качестве супругов.",
  },
  {
    time: "23:00",
    title: "Завершение вечера",
    description: "Красивое завершение нашего праздника.",
  },
];

function Program() {
  return (
    <section className={styles.program} id="program">
      <div className={styles.content}>
        <p className={styles.subtitle}>THE WEDDING DAY</p>

        <h2 className={styles.title}>Программа дня</h2>

        <p className={styles.date}>20 ИЮНЯ 2027</p>

        <div className={styles.timeline}>
          {events.map((event, index) => (
            <div className={styles.event} key={`${event.time}-${index}`}>
              <div className={styles.time}>{event.time}</div>

              <div className={styles.marker}>
                <span></span>
              </div>

              <div className={styles.eventContent}>
                <h3>{event.title}</h3>

                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <span>♡</span>
          <p>Будем рады провести этот день вместе с вами</p>
        </div>
      </div>
    </section>
  );
}

export default Program;
