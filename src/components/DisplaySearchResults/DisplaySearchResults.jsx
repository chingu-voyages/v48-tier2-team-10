import styles from "./DisplaySearchResults.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DinoDataContext } from "../../context/DinoDataContext";

export default function DisplaySearchResults({ currentItems }) {
  const { error } = useContext(DinoDataContext);
  const skeletonArr = new Array(12).fill(0);

  return (
    <div className={styles.displayContainer}>
      {error ? (
        <p
          className={styles.notFound}
        >{`Dinosaurs cannot be found at this time`}</p>
      ) : currentItems.length > 0 ? (
        currentItems.map((dino, index) => (
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
      ) : (
        skeletonArr.map((_, index) => (
          <div className={styles.skeletonCard} key={index}></div>
        ))
      )}
    </div>
  );
}
