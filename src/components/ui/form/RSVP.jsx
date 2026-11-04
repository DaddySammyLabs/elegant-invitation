import { useState } from "react";
import styles from "./RSVP.module.css";

// Répondez s'il vous plaît, что переводится как «Пожалуйста, ответьте».

function RSVP() {
  const [form, setForm] = useState({
    name: "",
    attendance: "",
    drink: "",
    comment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.attendance) {
      return;
    }

    console.log("RSVP:", form);

    setSubmitted(true);
  };

  return (
    <section className={styles.rsvp} id="rsvp">
      <div className={styles.content}>
        <p className={styles.subtitle}>KINDLY RESPOND</p>

        <h2 className={styles.title}>Будете ли вы с нами?</h2>

        <div className={styles.divider}></div>

        <p className={styles.description}>
          Пожалуйста, подтвердите своё присутствие до 1 июня 2027 года. Нам
          очень важно знать, сможете ли вы разделить этот день с нами.
        </p>

        {submitted ? (
          <div className={styles.success}>
            <span>♡</span>

            <h3>Спасибо за ваш ответ!</h3>

            <p>Мы получили ваше подтверждение. До встречи на нашей свадьбе!</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">Ваше имя и фамилия *</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Введите ваше имя"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label>Сможете ли вы присутствовать? *</label>

              <div className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={form.attendance === "yes"}
                    onChange={handleChange}
                    required
                  />

                  <span>С радостью приду!</span>
                </label>

                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={form.attendance === "no"}
                    onChange={handleChange}
                  />

                  <span>К сожалению, не смогу</span>
                </label>
              </div>
            </div>

            {form.attendance === "yes" && (
              <div className={styles.field}>
                <label htmlFor="drink">Предпочтения по напиткам</label>

                <select
                  id="drink"
                  name="drink"
                  value={form.drink}
                  onChange={handleChange}
                >
                  <option value="">Выберите напиток</option>

                  <option value="water">Вода</option>

                  <option value="juice">Сок</option>

                  <option value="tea">Чай / Кофе</option>

                  <option value="other">Другое</option>
                </select>
              </div>
            )}

            <div className={styles.field}>
              <label htmlFor="comment">Ваши пожелания или комментарии</label>

              <textarea
                id="comment"
                name="comment"
                placeholder="Напишите здесь..."
                value={form.comment}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <button type="submit" className={styles.button}>
              ОТПРАВИТЬ ОТВЕТ
              <span>↗</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default RSVP;
