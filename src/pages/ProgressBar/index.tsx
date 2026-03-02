// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { useEffect, useRef } from "react";

function ProgressBar() {
  // ** Hooks
  const barRef = useRef<HTMLDivElement>(null);

  // ** useEffect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;

      if (!barRef.current) return;

      if (window.innerWidth <= 1025) {
        // Mobile → ngang
        barRef.current.style.width = `${progress}%`;
        barRef.current.style.height = "100%";
      } else {
        // Desktop → dọc
        barRef.current.style.height = `${progress}%`;
        barRef.current.style.width = "100%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div
        className={`${styles.progressContainer__bar} ${styles.fade2}`}
        ref={barRef}
      ></div>
    </div>
  );
}

export default ProgressBar;
