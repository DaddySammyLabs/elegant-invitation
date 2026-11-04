import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.subtitle}>WITH LOVE</p>

        <h2 className={styles.names}>
          Александр <span>&</span> Анна
        </h2>

        <div className={styles.divider}></div>

        <p className={styles.message}>До встречи на нашей свадьбе!</p>

        <p className={styles.date}>20 ИЮНЯ 2027</p>

        <div className={styles.heart}>♡</div>
      </div>

      <div className={styles.bottom}>
        <p>Made with love</p>

        <p>© 2027 Александр & Анна</p>
      </div>
    </footer>
  );
}

export default Footer;
