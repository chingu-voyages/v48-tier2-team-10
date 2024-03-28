import styles from "./LinksDrawer.module.css";
import { useContext } from "react";
import { DinoDataContext } from "../../../context/DinoDataContext";
import DinoLink from "./DinoLink";

/* https://www.kindacode.com/article/react-create-an-animated-side-navigation-from-scratch/ */

export default function LinksDrawer({
  isLinksModalOpen,
  country,
  setIsLinksModalOpen,
}) {
  const { dinoData, loading, error } = useContext(DinoDataContext);

  const links = dinoData.filter(
    (dino) => dino.foundIn === country || dino.foundIn.includes(country)
  );

  const linkEl = links.map((link) => <DinoLink key={link.name} dino={link} />);

  return (
    <>
      <div
        className={`${styles.sideNav} ${
          isLinksModalOpen ? styles.sideNavActive : ""
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={() => setIsLinksModalOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <h3>Dinosaurs in {country}</h3>
        <ul>{linkEl}</ul>
      </div>
    </>
  );
}
