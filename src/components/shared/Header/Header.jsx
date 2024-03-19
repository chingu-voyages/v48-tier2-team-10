import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">DinoSoul</Link>
      <p>header</p>
      <Link to="/search">Search</Link>
    </header>
  );
}
