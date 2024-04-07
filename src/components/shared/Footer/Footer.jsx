import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Chingu V48-team 10</span>
      <Link
        to={"https://github.com/chingu-voyages/v48-tier2-team-10"}
        className={styles.link}
      >
        GitHub
      </Link>
    </footer>
  );
}
