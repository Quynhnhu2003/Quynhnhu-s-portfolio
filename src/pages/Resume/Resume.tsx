// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import ResumeItem from "./ResumeItem";
import type { resumeItemType } from "../../utils/type";
import { useTranslation } from "react-i18next";
import AnimatedSection from "../../components/Animation/AnimatedSection";

function Resume() {
  const { t } = useTranslation();

  const listResume = t("resume.listResume", {
    returnObjects: true,
  }) as resumeItemType[];

  return (
    <section className={styles.resumeContainer} id="resume">
      <div className={styles.resumeContainer__header}>
        <p>{t("resume.title")}</p>
        <span>{t("resume.bio")}</span>
      </div>
      <AnimatedSection
        animationType="staggerContainer"
        className={styles.resumeContainer__list}
      >
        {listResume.map((item: resumeItemType, index: number) => (
          <AnimatedSection
            key={item.id}
            animationType="fadeInUp"
            delay={index * 0.15}
          >
            <ResumeItem key={item.id} item={item} />
          </AnimatedSection>
        ))}
      </AnimatedSection>
    </section>
  );
}

export default Resume;
