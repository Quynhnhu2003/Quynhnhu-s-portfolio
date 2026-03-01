import styles from "./index.module.scss";

function ProgressBar() {
  return (
    <div className={styles.progressContainer}>
      <div
      className={`${styles.progressContainer__bar} ${styles.fade2}`}
        id="myBar"
        style={{ width: "100%", height: "0%" }}
      ></div>
    </div>
  );
}

export default ProgressBar;
