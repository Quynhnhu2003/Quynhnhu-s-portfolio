// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { useTranslation } from "react-i18next";
import ExperienceItem from "./components/ExperienceItem";
import AnimatedSection from "../../components/Animation/AnimatedSection";
import type { ExperienceItemType } from "../../utils/type/experienceType";

function WorkExperience() {
  // ** Hook
  const { t } = useTranslation();

  const listExperience = t("experience.listExperience", {
    returnObjects: true,
  }) as ExperienceItemType[];

  return (
    <section className={styles.experienceContainer} id="experience">
      <div className={styles.experienceContainer__header}>
        <p>{t("experience.title")}</p>
      </div>

      <AnimatedSection
        animationType="staggerContainer"
        className={styles.experienceContainer__list}
      >
        {listExperience.map((item: ExperienceItemType, index: number) => (
          <ExperienceItem item={item} index={index} />
        ))}
      </AnimatedSection>
    </section>
  );
}

export default WorkExperience;
