// ** Styles Import
import { useState } from "react";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

function Lang() {
  // ** State
  const [activeLang, setActiveLang] = useState<string>("vi");

  // ** Hooks
  const { i18n } = useTranslation();

  // ** Function
  const handleActiveButton = (language: string) => {
    if (!language) return;
    
    setActiveLang(language);
    i18n.changeLanguage(language);
  };

  return (
    <div className={styles.lang}>
      <button
        onClick={() => handleActiveButton("vi")}
        className={`${styles.lang__btn} ${activeLang === 'vi' && styles.active}`}
      >
        VI
      </button>
      <p>/</p>
      <button
        onClick={() => handleActiveButton("en")}
        className={`${styles.lang__btn} ${activeLang === 'en' && styles.active}`}
      >
        EN
      </button>
    </div>
  );
}

export default Lang;
