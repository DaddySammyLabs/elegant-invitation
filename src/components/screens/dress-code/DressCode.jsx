import styles from "./DressCode.module.css";

const colors = [
  { name: "Ivory", color: "#F3EDE3" },
  { name: "Champagne", color: "#DCCDBB" },
  { name: "Taupe", color: "#B5A694" },
  { name: "Sage", color: "#A5A88E" },
  { name: "Olive", color: "#747B68" },
];

function DressCode() {
  return (
    <section className={styles.dressCode} id="dresscode">
      <div className={styles.content}>
        <p className={styles.subtitle}>WEDDING STYLE</p>

        <h2 className={styles.title}>Dress Code</h2>

        <div className={styles.divider}></div>

        <p className={styles.description}>
          Нам будет особенно приятно, если вы поддержите атмосферу нашего
          праздника и выберете наряды в предложенной цветовой гамме.
        </p>

        <div className={styles.palette}>
          <h3>Цветовая палитра</h3>

          <div className={styles.colors}>
            {colors.map((item) => (
              <div className={styles.colorItem} key={item.name}>
                <div
                  className={styles.colorCircle}
                  style={{ backgroundColor: item.color }}
                />

                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.outfits}>
          <div className={styles.outfit}>
            {/* toGoogle: длинное платье */}
            <img
              src="https://nsk.paulaindress.com/image/cache/catalog/dynasty/dy-lana-01-700x1050.jpg"
              alt="Elegant women's wedding outfit"
              loading="lazy"
            />

            <div className={styles.outfitInfo}>
              <h3>Для девушек</h3>
              <p>Элегантные платья, лёгкие ткани и нежные оттенки.</p>
            </div>
          </div>

          <div className={styles.outfit}>
            {/* мужской костюм */}
            <img
              src="https://faamo.ru/assets/1200_1800/uploads/product/1354/6545.webp"
              alt="Italian classic smart casual men's outfit"
              loading="lazy"
            />

            <div className={styles.outfitInfo}>
              <h3>Для мужчин</h3>
              <p>Классические костюмы, светлые рубашки и спокойные цвета.</p>
            </div>
          </div>
        </div>

        <p className={styles.note}>
          Главное — ваше присутствие, хорошее настроение и улыбки!
        </p>
      </div>
    </section>
  );
}

export default DressCode;
