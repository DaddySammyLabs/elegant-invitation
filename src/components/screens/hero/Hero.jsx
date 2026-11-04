import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.subtitle}>THE WEDDING DAY</p>

        <h1 className={styles.title}>
          Александр
          <span>&</span>
          Анна
        </h1>

        <div className={styles.divider}></div>

        <p className={styles.date}>20 ИЮНЯ 2027</p>

        <p className={styles.description}>
          Мы будем счастливы разделить этот особенный день с вами
        </p>
      </div>

      <div className={styles.scroll}>
        <span>SCROLL TO DISCOVER</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}

export default Hero;
