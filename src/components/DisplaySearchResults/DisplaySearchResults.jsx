import styles from "./DisplaySearchResults.module.css";
import { Link } from "react-router-dom";

export default function DisplaySearchResults({ currentItems }) {
  const skeletonArr = new Array(12).fill(0);

  return (
    <div className={styles.displayContainer}>
      {currentItems.length > 0
        ? currentItems.map((dino, index) => (
            // to be changed to a dino card
            <Link
              to={`/dinosaurs/${dino.name}`}
              key={index}
              className={styles.cardContainer}
            >
              <div>
                <p>{dino.name}</p>
                <p>weight: {dino.weight}</p>
                <p>length: {dino.length}</p>
              </div>
            </Link>
          ))
        : skeletonArr.map((_, index) => (
            <div className={styles.skeletonCard} key={index}></div>
          ))}
    </div>
  );
}
