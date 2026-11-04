import { useState } from "react";
import styles from "./Header.module.css";

const navigation = [
  { title: "Главная", id: "home" },
  { title: "Приглашение", id: "invitation" },
  { title: "Место", id: "location" },
  { title: "Программа", id: "program" },
  { title: "Dress Code", id: "dresscode" },
  { title: "Ответ", id: "rsvp" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button
          className={styles.logo}
          onClick={() => scrollToSection("home")}
          aria-label="На главную"
        >
          A <span>&</span> A
        </button>

        {/* Desktop navigation */}
        <nav className={styles.navigation}>
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={styles.navLink}
            >
              {item.title}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
        >
          <span className={isOpen ? styles.active : ""}></span>
          <span className={isOpen ? styles.active : ""}></span>
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        className={`${styles.mobileNavigation} ${
          isOpen ? styles.mobileNavigationOpen : ""
        }`}
      >
        {navigation.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={styles.mobileLink}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
