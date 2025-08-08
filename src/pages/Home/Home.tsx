// ** styles import
import styles from "./index.module.scss";

// ** Another Import
import { useTranslation } from "react-i18next";
import TypingEffect from "../../components/TypingEffect";
import AnimatedSection from "../../components/Animation/AnimatedSection";

export default function Home() {
  // ** Hook
  const { t } = useTranslation();

  return (
    <section className={styles.homeContainer} id="home">
      <AnimatedSection animationType="fadeInUp" delay={0.1}>
        <h1 className={styles.homeContainer__greeting}>{t("home.greeting")}</h1>
      </AnimatedSection>

      <AnimatedSection animationType="slideInRight" delay={0.2}>
      <p className={styles.homeContainer__introduction}>
        <TypingEffect strings={[t("home.description")]} />
      </p>
      </AnimatedSection>

      <AnimatedSection animationType="zoomIn" delay={0.3}>
        <a
          className={styles.homeContainer__cv}
          href="/Pham-Nguyen-Quynh-Nhu-TopCV.pdf"
          download
        >
          📄 {t("home.download_cv")}
        </a>
      </AnimatedSection>
    </section>
  );
}
