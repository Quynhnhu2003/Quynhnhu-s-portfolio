// ** style import
import styles from "./index.module.scss";

// ** another import
import { useState } from "react";
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
  const { i18n } = useTranslation();

  // ** function
  const handleActiveButton = (id: number, language: string) => {
  console.log('id', id)
  console.log('language', language)
    if (id) {
      setClick(id);
      i18n.changeLanguage(language);
    }
  };
  return (
    <div className={styles.headerContainer}>
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
