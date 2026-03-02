// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { type ReactNode } from "react";

type MenuItem = {
  icon: ReactNode;
  name: string;
  id:string;
  isActive: boolean;
  setRef: any
};

function MenuItem({ icon, name, setRef, isActive, id }: MenuItem) {
  return (
    <a
    ref={setRef}
    href={`#${id}`}
    className={`${styles.item} ${isActive ? styles.active : ""}`}
  >
    {icon}
    <h5>{name}</h5>
  </a>
  );
}

export default MenuItem;
