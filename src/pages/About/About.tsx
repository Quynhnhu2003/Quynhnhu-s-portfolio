// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { useTranslation } from "react-i18next";
import ContentLeft from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";
import type { informationType } from "../../utils/type";
import AnimatedSection from "../../components/Animation/AnimatedSection";

function About() {
  const { t } = useTranslation();

  const infoList = t("about.information", {
    returnObjects: true,
  }) as informationType[];
  return (
    <section className={styles.aboutContainer} id="about">
      <div className={styles.aboutContainer__header}>
        <p>{t("about.title")}</p>
        <AnimatedSection animationType="slideInRight" delay={0.2}>
          <span>{t("about.bio")}</span>
        </AnimatedSection>
      </div>
      <div className={styles.aboutContainer__content}>
        <ContentLeft />
        <ContentRight information={infoList} />
      </div>
    </section>
  );
}

export default About;
