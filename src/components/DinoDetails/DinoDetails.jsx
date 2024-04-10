import styles from "./DinoDetails.module.css";
import noImage from "../../assets/large-no-dino-img.png";
import carnivorousDiet from "@assets/carnivorous.svg";

const DinoDetails = ({ thisDino }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.dinoName}>{thisDino.name}</h1>
      <h1 className={styles.dinoName}>Aegyptosaurus</h1>
      <div className={styles.group}>
        <div className={styles.left}>
          <h3 className={styles.title}>Diet</h3>
          <button className={styles.dietBtn}>
            <img
              src={`/images/${thisDino.diet}.svg`}
              alt={`${thisDino.diet} icon`}
            />
            <span>
              {thisDino.diet.charAt(0).toUpperCase() + thisDino.diet.slice(1)}
            </span>
          </button>
          <h3 className={styles.title}>Type Of Dinosaur</h3>
          <button className={styles.typeBtn}>
            {thisDino.typeOfDinosaur.charAt(0).toUpperCase() +
              thisDino.typeOfDinosaur.slice(1)}
          </button>
        </div>
        <div className={styles.center}>
          <img
            src={thisDino.imageSrc === "N/A" ? noImage : thisDino.imageSrc}
            alt={`${thisDino.name} image`}
            className={`${
              thisDino.imageSrc === "N/A" ? styles.noImg : styles.regularImg
            }`}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.rightDetails}>
            <div className={styles.property}>
              <span className={styles.propertyTitle}>Weight</span>
              <span className={styles.propertyValue}>
                {thisDino.weight === "N/A" ? "N/A" : `${thisDino.weight}kg`}{" "}
              </span>
            </div>
            <div className={styles.property}>
              <span className={styles.propertyTitle}>Length</span>
              <span className={styles.propertyValue}>
                {thisDino.length === "N/A" ? "N/A" : `${thisDino.length}m`}
              </span>
            </div>

            <div className={styles.property}>
              <span className={styles.propertyTitle}>When Lived</span>
              <span className={styles.propertyValue}>{thisDino.whenLived}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoDetails;
