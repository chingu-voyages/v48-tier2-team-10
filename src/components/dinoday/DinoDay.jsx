import DinoCard from './DinoCard'
import swirlLeft from '@assets/swirl-left.png'
import swirlRight from '@assets/swirl-right.png'
import { Link } from 'react-router-dom'

import styles from './DinoDay.module.css'
import { useContext } from 'react'
import { DinoDataContext } from '../../context/DinoDataContext'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

const getRandomDino = (data) => {
  const indexArr = []
  const randomDino = []
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * data.length)
    if (!indexArr.includes(index)) {
      indexArr.push(index)
    }
  }

  indexArr.map((index) => randomDino.push(data[index]))
  return randomDino
}

const DinoDay = () => {
  const { dinoData } = useContext(DinoDataContext)
  const randomDino = getRandomDino(dinoData)
  console.log(randomDino)

  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <img src={swirlLeft} alt="" />
        <h2>
          Dinosaurs<span className={styles.textBreak}></span> of the day
        </h2>
        <img src={swirlRight} alt="" />
      </div>
      <div
        className={styles.cardsWrapper}
        data-animated={!prefersReducedMotion}
      >
        <div className={styles.cardsContainer}>
          {!randomDino.includes(undefined) &&
            randomDino.map((dinoObj) => (
              <Link
                to={`/dinosaurs/${dinoObj.name}`}
                key={dinoObj.id}
                className={styles.link}
              >
                <DinoCard dinoObj={dinoObj} />
              </Link>
            ))}
          {!randomDino.includes(undefined) &&
            randomDino.map((dinoObj) => (
              <Link
                aria-hidden={true}
                to={`/dinosaurs/${dinoObj.name}`}
                key={dinoObj.id}
                className={`${styles.link} ${styles.duplicate}`}
              >
                <DinoCard dinoObj={dinoObj} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default DinoDay
