import styles from "./Location.module.css";

const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.7626020365574!2d64.42687597607837!3d39.76172010394903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e4b8e2a!2sAllama%20Muhammad%20Iqbal%20Street%2C%207%2C%20Bukhara%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1624271234567!5m2!1sen!2s";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Allama+Muhammad+Iqbal+Street+7+Bukhara+Uzbekistan";

const yandexMap = "addToButton -> yandexMap ";

function Location() {
  return (
    <section className={styles.location} id="location">
      <div className={styles.content}>
        <p className={styles.subtitle}>THE WEDDING VENUE</p>

        <h2 className={styles.title}>Место проведения</h2>

        <div className={styles.divider}></div>

        <p className={styles.description}>
          Мы будем рады видеть вас в этот особенный день в прекрасном месте, где
          начнётся наша семейная история.
        </p>

        <div className={styles.address}>
          <span className={styles.addressLabel}>НАШ АДРЕС</span>

          <h3>Бухара, Узбекистан</h3>

          <p>Allama Muhammad Iqbal Street, 7</p>
        </div>

        <div className={styles.map}>
          <iframe
            src={mapUrl}
            title="Wedding location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          ПОСМОТРЕТЬ НА КАРТЕ
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default Location;
