// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import ResumeEntry from "../ResumeEntry";
import type { itemType, resumeItemType } from "../../../../utils/type";

type ResumeItemProps = { item: resumeItemType }

function ResumeItem({ item }: ResumeItemProps) {
  return (
    <section className={styles.resume}>
      <h1 className={styles.resume__header}>{item.header}</h1>

      {item.list_item?.map((resume: itemType) => (
        <ResumeEntry key={resume.id} data={resume} />
      ))}
    </section>
  );
}

export default ResumeItem;
