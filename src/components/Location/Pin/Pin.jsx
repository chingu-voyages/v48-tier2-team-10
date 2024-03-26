import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import dinoIcon from "@assets/pin.png";
import styles from "./Pin.module.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Pin({ dino, inMultipleCountries }) {
  // to check pathname, if pathname is '/' ie the landing page
  const location = useLocation();

  const customIcon = new Icon({
    iconUrl: dinoIcon,
    iconSize: location.pathname === "/" ? [15, 15] : [25, 25],
  });

  return (
    <>
      {dino?.position && (
        <Marker
          position={[dino.position?.latitude, dino.position?.longitude]}
          icon={customIcon}
        >
          {location.pathname === "/" ? (
            // popup for landing page dinos
            <Popup>
              <Link to={`/dinosaurs/${dino.name}`} className={styles.link}>
                <div className={styles.container}>
                  <img
                    src={dino.imageSrc}
                    alt={`${dino.name} image`}
                    className={styles.image}
                  />
                  <span className={`${styles.popup} ${styles.textLarge}`}>
                    {dino?.name}
                  </span>
                  <span className={`${styles.popup} ${styles.textSmall}`}>
                    {dino?.position?.country}
                  </span>
                </div>
              </Link>
            </Popup>
          ) : (
            // popup for dino on dinosaur page
            <Popup>
              {inMultipleCountries ? (
                <p className={styles.popup}>
                  {" "}
                  The {dino?.name} dinosaur lives in multiple places - one of
                  them is {dino?.position?.country}{" "}
                </p>
              ) : (
                <p className={styles.popup}>
                  The {dino?.name} dinosaur lives in {dino?.position?.country}
                </p>
              )}
            </Popup>
          )}
        </Marker>
      )}
    </>
  );
}
