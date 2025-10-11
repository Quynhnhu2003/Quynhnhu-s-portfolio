// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import AnimatedSection from "../../../../components/Animation/AnimatedSection";

function ContentLeft() {
  return (
      <AnimatedSection animationType="zoomIn" delay={0.3} className={styles.leftContainer}>
        <img
          src={"https://res.cloudinary.com/dwcg5odh2/image/upload/v1760165778/quynhnhu_avatar_lew4p9.jpg"}
          alt="Quynhnhhu's avatar"
        />
      </AnimatedSection>
  );
}

export default ContentLeft;
