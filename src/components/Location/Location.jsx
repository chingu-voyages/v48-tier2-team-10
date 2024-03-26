import styles from "./Location.module.css";
import Map from "./Map/Map";
import swirlLeft from "../../assets/swirl-left.png";
import swirlRight from "../../assets/swirl-right.png";
import { useLocation } from "react-router-dom";

export default function Location({ dinoData }) {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img src={swirlLeft} alt="swirl-left" />
        <h2 className={styles.title}>
          {location.pathname === "/" ? "Location" : "Found In"}
        </h2>
        <img src={swirlRight} alt="swirl-right" />
      </div>
      {dinoData[0] ? (
        <Map dinoData={dinoData} />
      ) : (
        <p
          className={styles.notFound}
        >{`Location cannot be found at this time`}</p>
      )}
    </div>
  );
}
