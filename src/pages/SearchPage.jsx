import { useContext } from 'react'
import { DinoDataContext } from '../context/DinoDataContext'
import SearchBar from '../components/SearchBar/SearchBar'

export default function SearchPage() {
  const { dinoData } = useContext(DinoDataContext)

  console.log(dinoData)
  return (
    <div>
      <SearchBar />
    </div>
  )
}
