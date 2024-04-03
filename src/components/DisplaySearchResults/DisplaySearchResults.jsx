// import styles from "./DisplaySearchResults.module.css";

export default function DisplaySearchResults({ currentItems }) {
  return (
    <div>
      {currentItems &&
        currentItems.map((dino, index) => <li key={index}>{dino.name}</li>)}
    </div>
  );
}
