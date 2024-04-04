import styles from "./DisplaySearchResults.module.css";

export default function DisplaySearchResults({ currentItems }) {
  return (
    <div className={styles.displayContainer}>
      {currentItems &&
        currentItems.map((dino, index) => (
          // to be changed to a dino card
          <li key={index} className={styles.cardContainer}>
            <div>
              <p>{dino.name}</p>
              <p>weight: {dino.weight}</p>
              <p>length: {dino.length}</p>
            </div>
          </li>
        ))}
    </div>
  );
}
