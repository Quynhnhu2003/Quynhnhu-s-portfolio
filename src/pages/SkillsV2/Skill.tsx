// ** Styles Import
import styles from "./index.module.scss";

// ** Components Import
import CoreSkills from "./components/CoreSkills";
import SupportSkill from "./components/SupportGrid";

// ** Another Import
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


const coreSkills = [
  {
    name: "ReactJS",
    summary: "Built scalable SPA, optimized re-render, custom hooks, performance tuning.",
  },
  {
    name: "NextJS",
    summary: "SSR/SSG, SEO optimization, routing, production deployment.",
  },
  {
    name: "TypeScript",
    summary: "Strong typing, generics, scalable architecture.",
  },
  {
    name: "Angular",
    summary: "Component architecture, services, RxJS, enterprise structure.",
  },
];

const supportingSkills = [
  "SCSS",
  "CSS Modules",
  "Responsive Design",
  "REST API",
  "Context API",
  "Git",
  "Agile",
  "Postman",
  "WebSocket",
  "UI Performance",
];

function SkillsV2() {
  // ** State
  const [mounted, setMounted] = useState<boolean>(false);

  // ** Hook
  const { t } = useTranslation();

  // ** useEffect
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <section className={styles.skillsSection} id="skill">
    <div className={styles.skillsSection__header}>
        <p>{t("skill.title")}</p>
      </div>

    <CoreSkills coreSkills={coreSkills} mounted={mounted} />

    <h2 className={styles.title}>Additional Skills</h2>

    <SupportSkill supportingSkills={supportingSkills} />
  </section>
  );
}

export default SkillsV2;
