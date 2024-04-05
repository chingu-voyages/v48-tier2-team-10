import { useContext } from "react";
import { DinoDataContext } from "../context/DinoDataContext";
import Hero from "../components/Hero/Hero";
import Chart from "../components/Chart/Chart";
import Location from "../components/Location/Location";
import LinksDrawer from "../components/Location/LinksDrawer/LinksDrawer";
import styles from "./Landing.module.css";
import { getCountries } from "../components/Location/getCountries";
import useToggleModal from "../components/Location/LinksDrawer/useToggleModal";
import { useRef } from "react";

export default function Landing() {
  const { dinoData, loading, error } = useContext(DinoDataContext);

  const {
    isLinksDrawerOpen,
    setIsLinksDrawerOpen,
    country,
    setCountry,
    toggleModal,
  } = useToggleModal();

  const locationRef = useRef(null);

  console.log(dinoData);

  if (loading) return <p>loading...</p>;

  if (error) return <p>cannot fetch dinosaurs</p>;

  return (
    <div>
      <Hero locationRef={locationRef} />

      <Chart />

      <div ref={locationRef} className={styles.locationContainer}>
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
