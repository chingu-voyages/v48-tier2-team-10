import { Link } from "react-router-dom";
import icon from "../../../assets/pin.png";
import styles from "./DinoLink.module.css";

export default function DinoLink({ dino }) {
  return (
    <Link to={`/dinosaurs/${dino.name}`}>
      <div className={styles.flex}>
        <img src={icon} alt="" className={styles.icon} />
        <span>{dino.name}</span>
      </div>
    </Link>
  );
}
