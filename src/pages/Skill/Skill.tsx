// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { useTranslation } from "react-i18next";
import SkillItem from "./SkillItem";
import type { skillItemType } from "../../utils/type";
import AnimatedSection from "../../components/Animation/AnimatedSection";

function Skill() {
  const { t } = useTranslation();

  const listSkill = t("skill.listSkill", {
    returnObjects: true,
  }) as skillItemType[];
  return (
      <section className={styles.skillContainer} id="skill">
      <div className={styles.skillContainer__header}>
        <p>{t("skill.title")}</p>
      </div>

        <AnimatedSection animationType="staggerContainer" className={styles.skillContainer__listSkill}>
          {listSkill &&
            listSkill.map((skill: skillItemType, index:number) => (
              <AnimatedSection animationType="zoomIn" delay={index * 0.1} key={skill.name}>
                <SkillItem item={skill} key={skill.id} />
              </AnimatedSection>
            ))}
        </AnimatedSection>
    </section>
  );
}

export default Skill;
