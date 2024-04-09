import styles from './DinoCard.module.css'
import herbivorous from '@assets/herbivorous.svg'
import carnivorous from '@assets/carnivorous.svg'
import omnivorous from '@assets/omnivorous.svg'
import unknownDiet from '@assets/unknownDiet.svg'
import locationpin from '@assets/locationpin.svg'
import noImg from '@assets/no-dino-img.png'
import { capFirstLetter } from '../../utils/utils'

const DinoCard = ({ dinoObj }) => {
  let dietImg
  switch (dinoObj.diet) {
    case 'herbivorous':
      dietImg = herbivorous
      break
    case 'omnivorous':
      dietImg = omnivorous
      break
    case 'herbivorous or omnivorous':
      dietImg = omnivorous
      break
    case 'carnivorous':
      dietImg = carnivorous
      break
    case 'unknown':
      dietImg = unknownDiet
      break
    default:
      break
  }

  const weight = dinoObj.weight === 'N/A' ? '??kg' : `${dinoObj.weight}kg`
  const length = dinoObj.length === 'N/A' ? '??m' : `${dinoObj.length}m`

  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.dinoImg}
        src={dinoObj.imageSrc !== 'N/A' ? dinoObj.imageSrc : noImg}
        alt=""
      />
      <div className={styles.details}>
        <h5 className={styles.name}>{dinoObj.name}</h5>
        <div className={styles.diet}>
          <img src={dietImg} alt="" />
          <p>{capFirstLetter(dinoObj.diet)}</p>
        </div>
        <div className={styles.location}>
          <img src={locationpin} alt="" />
          <p>{dinoObj.foundIn}</p>
        </div>
        <div className={styles.weight}>
          {weight}, {length}
        </div>
      </div>
    </div>
  )
}

export default DinoCard
