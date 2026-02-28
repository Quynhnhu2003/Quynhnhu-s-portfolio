// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import ContactMe from "../../pages/ContactMe/Contact";
import { useState } from "react";

function WorkWithMe() {
  // ** State
  const [open, setOpen] = useState<boolean>(false);

  // ** Function
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.contact}>
      <button className={styles.contact__btnWork} onClick={handleToggle}>
        <h4>
          Work <br /> with me
        </h4>
        <div className={styles.contact__btnWork__ar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="240"
            height="16"
            viewBox="0 0 240 16"
            fill="none"
          >
            <path
              d="M239.707 8.70709C240.098 8.31656 240.098 7.6834 239.707 7.29287L233.343 0.928912C232.953 0.538388 232.319 0.538388 231.929 0.928912C231.538 1.31944 231.538 1.9526 231.929 2.34313L237.586 7.99998L231.929 13.6568C231.538 14.0474 231.538 14.6805 231.929 15.071C232.319 15.4616 232.953 15.4616 233.343 15.071L239.707 8.70709ZM8.74228e-08 9L239 8.99998L239 6.99998L-8.74228e-08 7L8.74228e-08 9Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
      <div className={`${styles.contact__form} ${open ? styles.showForm : ""}`}>
        <ContactMe onclick={handleToggle} />
      </div>
    </div>
  );
}

export default WorkWithMe;
