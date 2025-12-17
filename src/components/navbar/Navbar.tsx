// ** styles import
import styles from "./index.module.scss";

// ** another import
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { navItemType } from "../../utils/type";

const navBarItem: navItemType[] = [
  {
    id: "home",
    title: "navbar.home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"></path>
      </svg>
    ),
  },
  {
    id: "about",
    title: "navbar.about",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 64 64"
        strokeWidth="3"
        stroke="#000000"
        fill="none"
      >
        <circle cx="32" cy="18.14" r="11.14" />
        <path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z" />
      </svg>
    ),
  },
  {
    id: "resume",
    title: "navbar.resume",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        width="24"
        height="24"
        viewBox="0 0 32 32"
        data-name="Layer 1"
        id="Layer_1"
      >
        <rect height="1" width="12" x="10" y="29" />
        <rect height="1" width="12" x="10" y="2" />
        <rect height="1" width="4" x="9" y="5" />
        <rect height="1" width="4" x="9" y="9" />
        <rect height="1" width="10" x="13" y="12" />
        <rect height="1" width="3" x="9" y="12" />
        <rect height="1" width="10" x="13" y="15" />
        <rect height="1" width="3" x="9" y="15" />
        <rect height="1" width="10" x="13" y="18" />
        <rect height="1" width="3" x="9" y="18" />
        <rect height="1" width="10" x="13" y="21" />
        <rect height="1" width="3" x="9" y="21" />
        <rect height="1" width="10" x="13" y="24" />
        <rect height="1" width="3" x="9" y="24" />
        <rect
          height="1"
          transform="translate(9.5 41.5) rotate(-90)"
          width="20"
          x="15.5"
          y="15.5"
        />
        <path d="M22,2V3h2a1,1,0,0,1,1,1V6h1V4a2,2,0,0,0-2-2Z" />
        <rect
          height="1"
          transform="translate(-9.5 22.5) rotate(-90)"
          width="20"
          x="-3.5"
          y="15.5"
        />
        <path d="M10,2V3H8A1,1,0,0,0,7,4V6H6V4A2,2,0,0,1,8,2Z" />
        <path d="M22,30V29h2a1,1,0,0,0,1-1V26h1v2a2,2,0,0,1-2,2Z" />
        <path d="M10,30V29H8a1,1,0,0,1-1-1V26H6v2a2,2,0,0,0,2,2Z" />
        <rect height="5" width="1" x="9" y="5" />
        <rect height="5" width="1" x="12" y="5" />
      </svg>
    ),
  },
  {
    id: "skill",
    title: "navbar.skill",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        width="24px"
        height="24px"
        viewBox="0 0 64 64"
      >
        <title />

        <g data-name="Team Skill" id="Team_Skill">
          <path d="M21,57v3.5H19V57a3,3,0,0,0-.88-2.13,3.29,3.29,0,0,0-.81-.57,2.45,2.45,0,0,1-.26.06,2.43,2.43,0,0,1-.26.06,3.84,3.84,0,0,1-.76.08H16a4,4,0,0,1-.77-.08l-.24,0-.27-.07A3,3,0,0,0,13,57v3.5H11V57a5,5,0,0,1,1.81-3.83,4.51,4.51,0,1,1,6.38,0c.12.09.23.19.34.29A5.05,5.05,0,0,1,21,57Z" />

          <path d="M21,35.5V39H19V35.5a3,3,0,0,0-.88-2.13,3.29,3.29,0,0,0-.81-.57,2.45,2.45,0,0,1-.26.06,2.43,2.43,0,0,1-.26.06A3.84,3.84,0,0,1,16,33H16a4,4,0,0,1-.77-.08l-.24,0-.27-.07A3,3,0,0,0,13,35.5V39H11V35.5a5,5,0,0,1,1.81-3.83,4.51,4.51,0,1,1,6.38,0c.12.09.23.19.34.29A5.05,5.05,0,0,1,21,35.5Z" />

          <path d="M21,14v3.5H19V14a3,3,0,0,0-.88-2.13,3.29,3.29,0,0,0-.81-.57,2.45,2.45,0,0,1-.26.06,2.43,2.43,0,0,1-.26.06,3.84,3.84,0,0,1-.76.08H16a4,4,0,0,1-.77-.08l-.24,0-.27-.07A3,3,0,0,0,13,14v3.5H11V14a5,5,0,0,1,1.81-3.83,4.51,4.51,0,1,1,6.38,0c.12.09.23.19.34.29A5.05,5.05,0,0,1,21,14Z" />

          <path d="M50,28H30a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3H50a3,3,0,0,0,3-3V31A3,3,0,0,0,50,28Zm1,5a1,1,0,0,1-1,1H40V30H50a1,1,0,0,1,1,1Z" />

          <path d="M50,7H30a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3H50a3,3,0,0,0,3-3V10A3,3,0,0,0,50,7Zm1,5a1,1,0,0,1-1,1H37V9H50a1,1,0,0,1,1,1Z" />

          <path d="M50,49H30a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3H50a3,3,0,0,0,3-3V52A3,3,0,0,0,50,49Zm1,5a1,1,0,0,1-1,1H45V51h5a1,1,0,0,1,1,1Z" />
        </g>
      </svg>
    ),
  },
  {
    id: "contact",
    title: "navbar.contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
        </g>
      </svg>
    ),
  },
];

export default function Navbar() {
  // ** state
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [clicked, setClicked] = useState<string>("");

  // ** Hooks
  const { t } = useTranslation();
  
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarContainer__navmenu}>
        <ul className={styles.navbarContainer__navmenu__list}>
          {navBarItem &&
            navBarItem.map((i: navItemType) => (
              <li
              key={i.id}
                className={`${styles.navbarContainer__navmenu__list__item} ${
                  clicked === i.id && styles.active
                }`}
                onMouseEnter={() => setHoveredId(i.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setClicked(i.id)}
              >
                <a href={`#${i.id}`}>
                  {i.icon}
                  {(hoveredId === i.id || clicked === i.id) && (
                    <span>{t(i.title)}</span>
                  )}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
