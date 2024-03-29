import { useContext } from "react";
import { DinoDataContext } from "../context/DinoDataContext";
import Hero from "../components/Hero";
import Location from "../components/Location/Location";
import LinksDrawer from "../components/Location/LinksDrawer/LinksDrawer";
import Chart from "./Chart";
import styles from "./Landing.module.css";
import { getCountries } from "../components/Location/getCountries";
import useToggleModal from "../components/Location/LinksDrawer/useToggleModal";

export default function Landing() {
  const { dinoData, loading, error } = useContext(DinoDataContext);

  const {
    isLinksModalOpen,
    setIsLinksModalOpen,
    country,
    setCountry,
    toggleModal,
  } = useToggleModal();

  console.log(dinoData);

  if (loading) return <p>loading...</p>;

  if (error) return <p>cannot fetch dinosaurs</p>;

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
