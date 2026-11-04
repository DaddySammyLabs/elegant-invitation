import styles from "./Invitation.module.css";

function Invitation() {
  return (
    <section className={styles.invitation} id="invitation">
      <div className={styles.content}>
        <p className={styles.subtitle}>TO OUR DEAREST FAMILY AND FRIENDS</p>

        <div className={styles.decoration}>
          <span></span>
          <span className={styles.heart}>♡</span>
          <span></span>
        </div>

        <h2 className={styles.title}>Дорогие гости!</h2>

        <p className={styles.text}>
          В нашей жизни скоро произойдёт очень важное и счастливое событие — мы
          станем семьёй!
        </p>

        <p className={styles.text}>
          И нам очень хочется разделить этот особенный день с самыми близкими и
          дорогими людьми.
        </p>

        <p className={styles.text}>
          Будем счастливы видеть вас на нашей свадьбе!
        </p>

        <div className={styles.signature}>
          С любовью,
          <span>Александр & Анна</span>
        </div>
      </div>
    </section>
  );
}

export default Invitation;
