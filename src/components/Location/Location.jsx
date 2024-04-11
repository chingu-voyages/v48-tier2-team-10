import styles from "./Location.module.css";
import Map from "./Map/Map";
import swirlLeft from "../../assets/swirl-left.png";
import swirlRight from "../../assets/swirl-right.png";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { DinoDataContext } from "../../context/DinoDataContext";

export default function Location({ dinoData, toggleModal }) {
  const location = useLocation();
  const { loading, error } = useContext(DinoDataContext);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img src={swirlLeft} alt="swirl-left" />
        <h2
          className={`${
            location.pathname === "/" ? styles.landingTitle : styles.detailTitle
          }`}
        >
          {location.pathname === "/" ? "Location" : "Found In"}
        </h2>
        <img src={swirlRight} alt="swirl-right" />
      </div>
      {dinoData[0] && <Map dinoData={dinoData} toggleModal={toggleModal} />}
      {loading && <div className={styles.skeletonMap}></div>}
      {error && (
        <p
          className={styles.notFound}
        >{`Location cannot be found at this time`}</p>
      )}
    </div>
  );
}
