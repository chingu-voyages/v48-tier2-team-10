import { Link } from "react-router-dom";
import styles from "./LinkCard.module.css";
import noImage from "../../../assets/no-dino-img.png";

export default function LinkCard({ dino }) {
  return (
    <div className={styles.cardContainer}>
      <Link to={`/dinosaurs/${dino.name}`} className={styles.link}>
        <div className={styles.imageContainer}>
          {dino.imageSrc === "N/A" ? (
            <img src={noImage} alt="no dino image" className={styles.dinoImg} />
          ) : (
            <img
              src={dino.imageSrc}
              alt={`${dino.name} image`}
              className={styles.dinoImg}
            />
          )}
        </div>
        <div className={styles.nameContainer}>
          <span className={styles.name}>{dino.name}</span>
        </div>
      </Link>
    </div>
  );
}
