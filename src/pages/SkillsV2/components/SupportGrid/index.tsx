// ** Styles Import
import styles from "./index.module.scss";

type SupportSkillProps = { supportingSkills: any }

function SupportSkill({ supportingSkills }: SupportSkillProps) {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        {[...supportingSkills, ...supportingSkills].map((skill, index) => (
          <span key={index} className={styles.tag}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SupportSkill;
