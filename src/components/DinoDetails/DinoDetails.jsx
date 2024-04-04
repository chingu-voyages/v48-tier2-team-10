import styles from './DinoDetails.module.css'
import carnivorousDiet from '@assets/carnivorous.svg'

const DinoDetails = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.dinoName}>Aegyptosaurus</h1>
      <div className={styles.group}>
        <div className={styles.left}>
          <h3 className={styles.title}>Diet</h3>
          <button className={styles.dietBtn}>
            <img src={carnivorousDiet} alt="diet" />
            <span>Carnivorous</span>
          </button>
          <h3 className={styles.title}>Type Of Dinosaur</h3>
          <button className={styles.typeBtn}>Large theropod</button>
        </div>
        <div className={styles.center}>
          <img
            src="https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/aegypto.jpg"
            alt=""
          />
        </div>
        <div className={styles.right}>
          <div className={styles.rightDetails}>
            <div className={styles.property}>
              <span className={styles.propertyTitle}>Weight</span>
              <span className={styles.propertyValue}>1500 kg</span>
            </div>
            <div className={styles.property}>
              <span className={styles.propertyTitle}>Length</span>
              <span className={styles.propertyValue}>9.0 m</span>
            </div>

            <div className={styles.property}>
              <span className={styles.propertyTitle}>When Lived</span>
              <span className={styles.propertyValue}>
                Late Cretaceous, 76-74 million years ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DinoDetails
