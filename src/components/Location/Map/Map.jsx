import { MapContainer, TileLayer } from "react-leaflet";
import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";
import Pin from "../Pin/Pin";
import { useLocation } from "react-router-dom";
import { getDinoArr } from "./getDinoArr";
import { getLatLong } from "./getLatLong";

export default function Map({ dinoData, toggleModal }) {
  // to check pathname; if pathname is '/' ie the landing page, then the placeholder data is used
  const location = useLocation();

  // calls the getDinoArr function to check if the dinosaur can be found in more than one country
  const dinoArr =
    location.pathname === "/"
      ? dinoData
      : dinoData?.map((dino) => getDinoArr(dinoData, dino));

  // calls the getLatLong function to update each dino object in the dinoArr with latitude and longitude
  const updatedDinoArr =
    location.pathname === "/"
      ? dinoData
      : dinoArr.flat(2).map((dino) => {
          return {
            ...dino,
            position: getLatLong(dino.foundIn),
          };
        });

  // map positon: if updatedDinoArr has more than one dino then it is the placeholder data
  // or the dino can be found in multiple countries - the map zooms out to show the world map
  const mapPosition =
    updatedDinoArr.length > 1
      ? [15, 15]
      : [
          updatedDinoArr[0]?.position?.latitude,
          updatedDinoArr[0]?.position?.longitude,
        ];

  // if uppdatedDinoArr only has one dino then the map zooms into this one dino's location
  const mapZoom = updatedDinoArr.length > 1 ? 2 : 4;

  const pinEl = updatedDinoArr.map((dino, index) => (
    <Pin
      dino={dino}
      key={index}
      inMultipleCountries={updatedDinoArr.length > 1 ? true : false}
      toggleModal={toggleModal}
    />
  ));

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={mapZoom}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pinEl}
      </MapContainer>
    </div>
  );
}
