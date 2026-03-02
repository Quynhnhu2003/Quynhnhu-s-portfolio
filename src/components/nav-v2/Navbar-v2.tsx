// ** styles import
import styles from "./index.module.scss";

// ** another import
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
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
  const indicatorRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // ** usseEffect
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Indicator animation
  useEffect(() => {
    const currentItem = itemRefs.current[activeItem];
    const indicator = indicatorRef.current;

    if (currentItem && indicator) {
      const { offsetTop, offsetHeight } = currentItem;

      indicator.style.top = `${offsetTop}px`;
      indicator.style.height = `${offsetHeight}px`;
    }
  }, [activeItem]);

  return (
    <div className={`${styles.menu} ${styles.menuh}`}>
      <img
        className={styles.menu__imgProfile}
        src="https://res.cloudinary.com/dwcg5odh2/image/upload/v1760165778/quynhnhu_avatar_lew4p9.jpg"
        alt="Avatar"
      />

      <div ref={indicatorRef} className={styles.menu__indicator} />

      <div className={styles.menu__sub}>
        {navBarItem &&
          navBarItem.map((i) => {
            const translatedName = t(i.title);

            return (
              <MenuItem
                key={i.id}
                icon={i.icon}
                id={i.id}
                name={translatedName}
                isActive={activeItem === i.id}
                setRef={(el:any) => (itemRefs.current[i.id] = el)}
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
