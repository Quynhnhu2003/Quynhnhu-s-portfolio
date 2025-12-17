// ** style import
import styles from "./index.module.scss";

// ** another import
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { buttonLanguage } from "../../utils/type";

const btnLanguage: buttonLanguage[] = [
  {
    id: 1,
    title: "EN",
    language: "en",
  },
  {
    id: 2,
    title: "VN",
    language: "vi",
  },
];

function Header() {
  // ** state
  const [click, setClick] = useState<number>(1);
  const [hideHeader, setHideHeader] = useState(false);

  // ** Hooks
  const { i18n } = useTranslation();

  // ** function
  const handleActiveButton = (id: number, language: string) => {
    if (id) {
      setClick(id);
      i18n.changeLanguage(language);
    }
  };


  // ** useEffect
  useEffect(() => {
     // 🔥 Detect scroll direction
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scroll xuống
        setHideHeader(true);
      } else {
        // Scroll lên
        setHideHeader(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`${styles.headerContainer} ${
        hideHeader ? styles.hidden : ""
      }`}
    >
      {btnLanguage &&
        btnLanguage.map((i) => (
          <button
            key={i.id}
            className={`${styles.headerContainer__item} ${
              click === i.id && styles["headerContainer__item--active"]
            }`}
            onClick={() => handleActiveButton(i.id, i.language)}
          >
            {i.title}
          </button>
        ))}
    </div>
  );
}

export default Header;
