import { useEffect, useState } from "react";
import searchIcon from "@assets/searchIcon.svg";
import styles from "./SearchBar.module.css";

const SearchBar = ({
  setSearchResults,
  dinoData,
  setFilteredData,
  setItemOffset,
}) => {
  const [query, setQuery] = useState();

  // when no query, shows all dinos - this can be changed
  useEffect(() => {
    if (!query) {
      setSearchResults(dinoData);
      setFilteredData(dinoData);
    }
  }, [query, dinoData, setSearchResults, setFilteredData]);

  const filterDinoName = (value) => {
    const result = dinoData.filter((dino) =>
      dino.name.toLowerCase().includes(value.toLowerCase())
    );
    setItemOffset(0);
    setSearchResults(result);
    setFilteredData(result);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    filterDinoName(e.target.value);
  };

  // when user clicks on empty search input, shows all dinos - this can be changed
  const handleClick = (e) => {
    if (!e.target.value) {
      setSearchResults(dinoData);
      setFilteredData(dinoData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterDinoName(query);
    setQuery([]);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>Search dinosaurs</label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.searchInput}
          placeholder="Dinosaur Name"
          value={query}
          onClick={handleClick}
          onChange={handleChange}
        />
        <button type="submit" className={styles.searchBtn}>
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
