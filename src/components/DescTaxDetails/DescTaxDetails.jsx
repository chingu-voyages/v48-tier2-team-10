import swirlLeft from "../../assets/swirl-left.png";
import swirlRight from "../../assets/swirl-right.png";
import styles from "./DescTaxDetails.module.css";
import { useIsOverflow } from "../DinoDetails/useIsOverflow";
import { useRef } from "react";

export default function DescTaxDetails({ thisDino }) {
  const ref = useRef();
  const isOverflow = useIsOverflow(ref);

  return (
    <div className={styles.sectionContainer}>
      {/* description */}
      <div>
        <div className={styles.headingContainer}>
          <img src={swirlLeft} alt="left swirl" className={styles.swirl} />
          <h3 className={styles.heading}>Description</h3>
          <img src={swirlRight} alt="right swirl" className={styles.swirl} />
        </div>
        <div
          ref={ref}
          className={`${styles.descriptionContainer} ${
            isOverflow ? styles.overflow : styles.centerText
          }`}
        >
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
          <span className={styles.text}>
            {thisDino.typeSpecies.charAt(0).toUpperCase() +
              thisDino.typeSpecies.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
