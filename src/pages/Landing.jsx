import { useContext } from "react";
import { DinoDataContext } from "../context/DinoDataContext";
import Hero from "../components/Hero";
import Location from "../components/Location/Location";
import LinksDrawer from "../components/Location/LinksDrawer/LinksDrawer";
import { useState } from "react";
import Chart from "./Chart";
import styles from "./Landing.module.css";
import { getCountries } from "../helpers/getCountries";

export default function Landing() {
  const [isLinksModalOpen, setIsLinksModalOpen] = useState(false);
  const [country, setCountry] = useState();

  const { dinoData, loading, error } = useContext(DinoDataContext);

  console.log(dinoData);

  if (loading) return <p>loading...</p>;

  if (error) return <p>cannot fetch dinosaurs</p>;

  const toggleModal = (dino) => {
    setCountry(dino.position.country);
    setIsLinksModalOpen(true);
  };

  return (
    <div>
      <Hero />

      <Chart />

      <div className={styles.locationContainer}>
        <Location dinoData={getCountries(dinoData)} toggleModal={toggleModal} />
      </div>

      <LinksDrawer
        toggleModal={toggleModal}
        isLinksModalOpen={isLinksModalOpen}
        setIsLinksModalOpen={setIsLinksModalOpen}
        country={country}
      />
    </div>
  );
}
