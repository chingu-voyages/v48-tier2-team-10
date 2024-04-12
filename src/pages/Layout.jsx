import { Outlet } from 'react-router-dom'
import Header from '../components/shared/Header/Header'
import Footer from '../components/shared/Footer/Footer'
import { DinoDataContextProvider } from '../context/DinoDataContext'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <DinoDataContextProvider>
        <Header />
        <div className={styles.outletContainer}>
          <Outlet />
        </div>

        <Footer />
      </DinoDataContextProvider>
    </div>
  )
}
