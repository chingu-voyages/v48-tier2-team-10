import { Link, useParams } from 'react-router-dom'
import { DinoDataContext } from '../context/DinoDataContext'
import DinoDetails from '../components/DinoDetails/DinoDetails'
import { useContext } from 'react'
import Location from '../components/Location/Location'
import styles from './DinosaurPage.module.css'
import DescTaxDetails from '../components/DescTaxDetails/DescTaxDetails'

export default function DinosaurPage() {
  const { dino } = useParams()

  const { dinoData } = useContext(DinoDataContext)
  const thisDino = dinoData.find((dinosaur) => dinosaur.name === dino)

  if (!thisDino) {
    return (
      <div className={styles.loadingMessage}>Loading dinosaur details...</div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <Link to={'/search'} className={styles.backBtn}>
        Search
      </Link>

      <DinoDetails thisDino={thisDino} />

      <div className={styles.locationContainer}>
        <Location dinoData={[thisDino]} />
      </div>

      <div className={styles.descTaxDetailsContainer}>
        <DescTaxDetails thisDino={thisDino} />
      </div>
    </div>
  )
}
