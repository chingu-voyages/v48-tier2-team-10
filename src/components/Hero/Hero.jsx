import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

function Hero({ locationRef }) {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.h1}>Start to explore dinosaurs!</h1>
      <div className={styles.ctaButtons}>
        <button
          onClick={() =>
            locationRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className={styles.button}
        >
          Explore on map
        </button>
        <Link to={"/search"} className={styles.button}>
          Start search
        </Link>
      </div>
    </section>
  );
}

export default Hero;
