// ** Styles Import
import styles from "./index.module.scss";

function CoreSkill({coreSkills, mounted}: {coreSkills:any, mounted:boolean}) {
  return (
    <div className={styles.coreGrid}>
      {coreSkills.map((skill:any, index:number) => (
        <div
          key={skill.name}
          className={`${styles.coreGrid__card} ${mounted ? styles.show : ""}`}
          style={{ transitionDelay: `${index * 120}ms` }}
        >
          <h3>{skill.name}</h3>
          <p>{skill.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default CoreSkill