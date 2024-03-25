import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '@assets/dinoLogo.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="DinoSoul Logo" className={styles.dinoLogo} />
      </Link>
    </header>
  )
}
