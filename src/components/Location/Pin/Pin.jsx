import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import dinoIcon from "@assets/pin.png";
import styles from "./Pin.module.css";
import { useLocation } from "react-router-dom";

export default function Pin({ dino, inMultipleCountries, toggleModal }) {
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
          eventHandlers={toggleModal && { click: () => toggleModal(dino) }}
        >
          {location.pathname != "/" && (
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
