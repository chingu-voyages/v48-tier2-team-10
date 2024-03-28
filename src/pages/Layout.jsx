import { Outlet } from 'react-router-dom'
import Header from '../components/shared/Header/Header'
import Footer from '../components/shared/Footer/Footer'
import { DinoDataContextProvider } from '../context/DinoDataContext'

export default function Layout() {
  return (
    <DinoDataContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </DinoDataContextProvider>
  )
}
