// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import InformationItem from "./InformationItem";
import type { informationType } from "../../../../utils/type";
import AnimatedSection from "../../../../components/Animation/AnimatedSection";

function ContentRight({ information }: { information: informationType[] }) {
  return (
    <div className={styles.rightContainer}>
      <h1>Frontend Developer</h1>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nisi
        laboriosam! Dolore sunt magni eaque asperiores adipisci autem sint
        eligendi molestias, quam possimus quasi officia maxime nobis laudantium
        quo quas!
      </span>
      <AnimatedSection animationType="staggerContainer">
      <div className={styles.rightContainer__informationList}>
        {information &&
          information.map((item: informationType, index:number) => (
            <AnimatedSection key={item.id} animationType="fadeInUp" delay={index * 0.15}>
            <InformationItem key={item.id} information={item} />
          </AnimatedSection>
          ))}
      </div>
      </AnimatedSection>
    </div>
  );
}

export default ContentRight;
