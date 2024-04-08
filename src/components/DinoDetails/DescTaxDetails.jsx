import swirlLeft from "../../assets/swirl-left.png";
import swirlRight from "../../assets/swirl-right.png";
import styles from "./DescTaxDetails.module.css";

export default function DescTaxDetails({ thisDino }) {
  return (
    <div className={styles.sectionContainer}>
      {/* description */}
      <div>
        <div className={styles.headingContainer}>
          <img src={swirlLeft} alt="left swirl" className={styles.swirl} />
          <h3 className={styles.heading}>Description</h3>
          <img src={swirlRight} alt="right swirl" className={styles.swirl} />
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>
            {thisDino.description === "N/A"
              ? `No description available for the ${thisDino.name} dinosaur`
              : thisDino.description}
          </p>
        </div>
      </div>

      {/* taxonomic details */}
      <div>
        <div className={styles.headingContainer}>
          <img src={swirlLeft} alt="left swirl" className={styles.swirl} />
          <h3 className={styles.heading}>
            <span className={styles.heading}>Taxonomic </span>{" "}
            <span className={styles.heading}> details</span>
          </h3>
          <img src={swirlRight} alt="right swirl" className={styles.swirl} />
        </div>
        <div className={styles.taxonomicContainer}>
          <span className={styles.title}>Taxonomy</span>
          <span className={styles.text}>{thisDino.taxonomy}</span>
          <span className={styles.title}>Named by</span>
          <span className={styles.text}>{thisDino.namedBy}</span>
          <span className={styles.title}>Type species</span>
          <span className={styles.text}>{thisDino.typeSpecies}</span>
        </div>
      </div>
    </div>
  );
}
