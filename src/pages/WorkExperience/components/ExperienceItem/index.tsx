// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import AnimatedSection from "../../../../components/Animation/AnimatedSection";
import type {
  ExperienceItemType,
  ExperienceType,
} from "../../../../utils/type/experienceType";

type ExperienceItemProps = { item: ExperienceItemType; index: number };

function ExperienceItem({ item, index }: ExperienceItemProps) {
  return (
    <AnimatedSection
      key={item.id}
      animationType="fadeInUp"
      delay={index * 0.15}
      className={styles.item}
    >
      <h1>{item.header}</h1>

      <div className={styles.item__position}>
        <p>{item.position}</p>
        <span>{item.time}</span>
      </div>
      <ul className={styles.item__content}>
        {item.list_item &&
          item.list_item.length > 0 &&
          item.list_item.map((i: ExperienceType) => (
            <li key={i.id} className={styles.item__title}>{i.content}</li>
          ))}
      </ul>
    </AnimatedSection>
  );
}

export default ExperienceItem;
