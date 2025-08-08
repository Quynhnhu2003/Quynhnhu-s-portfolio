// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import AnimatedSection from "../../../../components/Animation/AnimatedSection";

function ContentLeft() {
  return (
    <div className={styles.leftContainer}>
      <AnimatedSection animationType="zoomIn" delay={0.3}>
      <img
        src={"src/pages/About/components/ContentLeft/img/quynhnhu_avatar.jpg"}
        alt="avatar"
      />
      </AnimatedSection>
    </div>
  );
}

export default ContentLeft;
