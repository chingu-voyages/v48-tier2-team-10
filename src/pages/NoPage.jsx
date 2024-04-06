import React from "react";
import styles from "./NoPage.module.css";
import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404</h1>
      <p>Oops, something went wrong.</p>
      <p>Sorry, we couldn't find your page.</p>

      <Link to={"/"} className={styles.button}>
        Home
      </Link>
    </div>
  );
}
