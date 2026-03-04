// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import type { itemType } from "../../../../utils/type";

type ResumeEntryProps = { data: itemType };

function ResumeEntry({ data }: ResumeEntryProps) {
  const {
    title,
    link,
    yearStart,
    yearEnd,
    git,
    location,
    detailsProject,
    tech,
  } = data;

  // ** Function
  const handleNavigate = (url?: string) => {
    if (!url) return;
    window.open(url, "_blank");
  };

  const renderYears = () => {
    if (yearStart) return `${yearStart} - ${yearEnd}`;
    return yearEnd;
  };

  const locationTitles = [
    location?.title,
    location?.title1,
    location?.title2,
    location?.title3,
  ].filter(Boolean);

  return (
    <div className={styles.item}>
      {/* Title */}
      <h4
        className={`${styles.item__title} ${link ? styles.clickable : ""}`}
        onClick={() => handleNavigate(link)}
      >
        {title}
      </h4>

      {/* Git */}
      {git && (
        <a href={git} rel="noopener noreferrer">
          {git}
        </a>
      )}

      {/* Year */}
      {yearEnd && <h5>{renderYears()}</h5>}

      {/* Content */}
      <div className={styles.item__content}>
        {locationTitles.map((loc, index) => (
          <em key={index}>{loc}</em>
        ))}

        {location?.address && (
          <em className={styles.item__address}>{location.address}</em>
        )}

        {detailsProject && <p>{detailsProject}</p>}

        {tech && (
          <p>
            <strong>Tech:</strong> {tech}
          </p>
        )}
      </div>
    </div>
  );
}

export default ResumeEntry;
