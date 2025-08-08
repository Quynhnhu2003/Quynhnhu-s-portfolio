// ** Style Import
import styles from "./index.module.scss";

// ** Another Import
import type { skillItemType } from "../../../utils/type";

function SkillItem({ item }: { item: skillItemType }) {
  return (
    <div className={styles.item}>
      <span className={styles.item__skill}>
        <span>{item.name}</span> <i className={styles.val}>{item.point}%</i>
      </span>
      <div className={styles.item__progress}>
        <div
          className={styles.item__progress__bar}
          style={{
            width: `${(item.point / 100) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default SkillItem;
