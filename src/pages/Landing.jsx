import { useContext } from "react";
import { DinoDataContext } from "../context/DinoDataContext";
import Hero from "../components/Hero/Hero";
import Chart from "../components/Chart/Chart";
import Location from "../components/Location/Location";
import LinksDrawer from "../components/Location/LinksDrawer/LinksDrawer";
import styles from "./Landing.module.css";
import { getCountries } from "../components/Location/getCountries";
import useToggleModal from "../components/Location/LinksDrawer/useToggleModal";

export default function Landing() {
  const { dinoData, loading, error } = useContext(DinoDataContext);

  const {
    isLinksDrawerOpen,
    setIsLinksDrawerOpen,
    country,
    setCountry,
    toggleModal,
  } = useToggleModal();

  return (
    <div>
      <Hero />

      <Chart />

      <div className={styles.locationContainer}>
        <Location dinoData={getCountries(dinoData)} toggleModal={toggleModal} />
      </div>

      <LinksDrawer
        toggleModal={toggleModal}
        isLinksDrawerOpen={isLinksDrawerOpen}
        setIsLinksDrawerOpen={setIsLinksDrawerOpen}
        country={country}
      />
    </div>
  );
}
