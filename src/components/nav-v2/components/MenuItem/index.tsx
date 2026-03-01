// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { type ReactNode } from "react";

type MenuItem = {
  icon: ReactNode;
  name: string;
  id:string;
  isActive: boolean;
  onclick: (name:string) => void
};

function MenuItem({ icon, name, onclick, isActive, id }: MenuItem) {
  // ** Function
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <a
      href={`#${id}`}
      onClick={() => onclick(id)}
      onMouseMove={handleMouseMove}
      className={`${styles.item} ${isActive ? styles.active : ""}`}
    >
      {icon}
      <h5>{name}</h5>
    </a>
  );
}

export default MenuItem;
