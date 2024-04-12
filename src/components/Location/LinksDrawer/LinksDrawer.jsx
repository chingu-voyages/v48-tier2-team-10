import styles from "./LinksDrawer.module.css";
import { useState, useContext } from "react";
import { DinoDataContext } from "../../../context/DinoDataContext";
import LinkCard from "./LinkCard";
import usePagination from "../../Pagination/usePagination";
import Pagination from "../../Pagination/Pagination";
import closeIcon from "../../../assets/close.png";

/* https://www.kindacode.com/article/react-create-an-animated-side-navigation-from-scratch/ */

export default function LinksDrawer({
  isLinksDrawerOpen,
  setIsLinksDrawerOpen,
  country,
}) {
  const [remountComponent, setRemountComponent] = useState(0);

  const { dinoData, loading, error } = useContext(DinoDataContext);

  const links = dinoData.filter(
    (dino) => dino.foundIn === country || dino.foundIn.includes(country)
  );

  const { currentItems, pageCount, handlePageClick, setItemOffset } =
    usePagination(8, links);

  const linkCardEl =
    currentItems &&
    currentItems.map((dino, index) => <LinkCard key={index} dino={dino} />);

  const handleCloseOverlay = (e) => {
    if (e.target.id === "overlay") {
      setIsLinksDrawerOpen(false);
      setItemOffset(0);
      setRemountComponent(Math.random());
    }
  };

  const closeDrawer = () => {
    setIsLinksDrawerOpen(false);
    setItemOffset(0);
    setRemountComponent(Math.random());
  };

  return (
    <div
      className={` ${isLinksDrawerOpen ? styles.overlay : ""}`}
      onClick={handleCloseOverlay}
      id="overlay"
    >
      <div
        className={`${styles.sideNav} ${
          isLinksDrawerOpen ? styles.sideNavActive : ""
        }`}
      >
        <div className={styles.header}>
          <button className={styles.closeButton} onClick={closeDrawer}>
            <img src={closeIcon} alt="" />
          </button>
        </div>

        <h3 className={styles.heading}>Dinosaurs in {country}</h3>

        <div className={styles.linkCardContainer}>{linkCardEl}</div>

        {links.length > 8 && (
          <div className={styles.paginationContainer}>
            <Pagination
              pageCount={pageCount}
              handlePageClick={handlePageClick}
              remountComponent={remountComponent}
            />
          </div>
        )}
      </div>
    </div>
  );
}
