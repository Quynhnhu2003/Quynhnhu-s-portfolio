// ** styles import
import styles from "./index.module.scss";

// ** another import
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { navBarItem } from "../../utils/data/navbarMenu";

// ** Components Import
import Lang from "./components/lang";
import MenuItem from "./components/MenuItem";
import DownloadCV from "./components/downloadCV";

function NavbarV2() {
  // ** State
  const [activeItem, setActiveItem] = useState<string>("");

  // ** Hooks
  const { t } = useTranslation();

  // ** Function
  const handleActiveItem = (name: string) => {
    if (!name) return;

    setActiveItem(name);
  };

  return (
    <div className={`${styles.menu} ${styles.menuh}`}>
      <img
        className={styles.menu__imgProfile}
        src="https://res.cloudinary.com/dwcg5odh2/image/upload/v1760165778/quynhnhu_avatar_lew4p9.jpg"
        alt="Avatar"
      />

      <div className={styles.menu__sub}>
        {navBarItem &&
          navBarItem.map((i) => {
            const translatedName = t(i.title);

            return (
              <MenuItem
                key={i.id}
                icon={i.icon}
                name={translatedName}
                onclick={handleActiveItem}
                isActive={activeItem === translatedName}
              />
            );
          })}
        <div className={styles["menu__sub--downloadRes"]}>
          <DownloadCV />
        </div>
        <div className={styles["menu__sub--langRes"]}>
          <Lang />
        </div>
      </div>

      <div className={styles.menu__lang}>
        <Lang />
        <DownloadCV />
      </div>
    </div>
  );
}

export default NavbarV2;
