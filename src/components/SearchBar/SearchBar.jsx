import searchIcon from '@assets/searchIcon.svg'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault()
        console.log('submitted')
      }}
    >
      <label className={styles.label}>Search dinosaurs</label>
      <div className={styles.inputWrapper}>
        <input className={styles.searchInput} placeholder="Dinosaur Name" />
        <button type="submit" className={styles.searchBtn}>
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </div>
    </form>
  )
}

export default SearchBar
