// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import type { itemType, resumeItemType } from "../../../utils/type";

function ResumeItem({ item }: { item: resumeItemType }) {
// ** Function
const handleNavigate = (url:string) => {
  window.location.href = url
}
  return (
    <div className={styles.resume}>
      <h1>{item.header}</h1>
      {item.list_item &&
        item.list_item.length > 0 &&
        item.list_item.map((i: itemType) => (
          <div key={i.id} className={styles.resume__item}>
            {i.link ? (
              <h4 className={styles.resume__item__title} style={{cursor: 'pointer'}} onClick={() => handleNavigate(i.link ?? '')} >{i.title}</h4>
            ) : (
              <h4 className={styles.resume__item__title}>{i.title}</h4>
            )}
            <h5>{i.yearStart ? `${i.yearStart} - ${i.yearEnd}` : i.yearEnd}</h5>

            <p className={styles.resume__item__content}>
              {i.location?.title && <em>{i.location.title}</em>}

              {i.location?.title1 && <em>{i.location.title1}</em>}
              {i.location?.title2 && <em>{i.location.title2}</em>}
              {i.location?.title3 && <em>{i.location.title3}</em>}

              {i.location?.address && (
                <em className={styles.resume__item__address}>
                  {i.location.address}
                </em>
              )}
            </p>

            {i.detailsProject && (
              <p className={styles.resume__item__content}>{i.location.title}</p>
            )}
            {i.tech && (
              <p className={styles.resume__item__content}>
                <strong>Tech:</strong>
                {i.tech}
              </p>
            )}
          </div>
        ))}
    </div>
  );
}

export default ResumeItem;
