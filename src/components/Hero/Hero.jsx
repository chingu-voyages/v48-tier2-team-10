import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.h1}>Start to explore dinosaurs!</h1>
      <div className={styles.ctaButtons}>
        <button className={styles.button}>Explore on map</button>
        <button className={styles.button}>Start search</button>
      </div>
    </section>
  )
}

export default Hero
