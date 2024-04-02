import { useState, useContext } from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import { DinoDataContext } from '../context/DinoDataContext'
import FilterDrawer from '../components/filter/drawer/FilterDrawer'
import styles from './SearchPage.module.css'
import Sort from '../components/Sort/Sort'

// dummy data - search results from search bar
const searchResults = [
  {
    id: 1,
    name: 'a',
    imageSrc:
      'https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/aardonyx.jpg',
    typeOfDinosaur: 'prosauropod',
    length: 0.5,
    weight: 50,
    diet: 'herbivorous',
    whenLived: 'Early Jurassic, 199-189 million years ago',
    foundIn: 'South Africa',
    taxonomy:
      'Dinosauria, Saurischia, Sauropodomorpha, Prosauropoda, Anchisauria',
    namedBy: 'Yates, Bonnan, Neveling, Chinsamy and Blackbeard 2010 (2009)',
    typeSpecies: 'celestae',
    description:
      'Aardonyx is known from 2 immature individuals. Adults would have been much larger, probably over 10m.Aardonyx would have been largely bipedal (walking on 2 legs) but also capable of walking on all 4 legs. This and its way of feeding are transitional features between those of basal sauropodomorphs and the more derived sauropods (large dinosaurs that walked on all fours) that came later.'
  },
  {
    id: 2,
    name: 'b',
    imageSrc:
      'https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/abeli.jpg',
    typeOfDinosaur: 'large theropod',
    length: 4,
    weight: 'N/A',
    diet: 'omnivorous',
    whenLived: 'Late Cretaceous, 74-70 million years ago',
    foundIn: 'Argentina',
    taxonomy:
      'Dinosauria, Saurischia, Theropoda, Neotheropoda, Ceratosauria, Abelisauridae, Abelisaurinae',
    namedBy: 'Bonaparte and Novas (1985)',
    typeSpecies: 'comahuensis',
    description: 'N/A'
  },
  {
    id: 3,
    name: 'c',
    imageSrc:
      'https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/achelou.jpg',
    typeOfDinosaur: 'ceratopsian',
    length: 16,
    weight: 150,
    diet: 'carnivorous',
    whenLived: 'Late Cretaceous, 83-70 million years ago',
    foundIn: 'USA, Canada',
    taxonomy:
      'Dinosauria, Ornithischia, Neornithischia, Cerapoda, Marginocephalia, Ceratopsia, Neoceratopsia, Coronosauria, Ceratopsidae, Centrosaurinae',
    namedBy: 'Sampson  (1995)',
    typeSpecies: 'horneri',
    description: 'N/A'
  },
  {
    id: 4,
    name: 'Aegyptosaurus',
    imageSrc:
      'https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/aegypto.jpg',
    typeOfDinosaur: 'sauropod',
    length: 'N/A',
    weight: 2000,
    diet: 'omnivorous',
    whenLived: 'Late Cretaceous, 98-93 million years ago',
    foundIn: 'Egypt',
    taxonomy:
      'Dinosauria, Saurischia, Sauropodomorpha, Sauropoda, Eusauropoda, Neosauropoda, Macronaria, Camarasauromorpha, Titanosauriformes, Titanosauria',
    namedBy: 'Stromer (1932)',
    typeSpecies: 'baharijensis',
    description: 'N/A'
  }
]

export default function SearchPage() {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)

  const { dinoData } = useContext(DinoDataContext)

  console.log(dinoData)

  return (
    <>
      <SearchBar />

      <FilterDrawer
        searchResults={searchResults}
        isFilterDrawerOpen={isFilterDrawerOpen}
        setIsFilterDrawerOpen={setIsFilterDrawerOpen}
      />

      <button
        className={styles.filterBtn}
        onClick={() => setIsFilterDrawerOpen(true)}
      >
        Filter
      </button>

      <Sort />
    </>
  )
}
