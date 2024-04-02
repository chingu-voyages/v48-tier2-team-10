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

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (!query) {
      setSearchResults(dinoData);
      setFilteredData(dinoData);
    }
  }, [query, dinoData, setSearchResults, setFilteredData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = dinoData.filter((dino) =>
      dino.name.toLowerCase().includes(query.toLowerCase())
    );

    setItemOffset(0);
    setSearchResults(result);
    setFilteredData(result);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>Search dinosaurs</label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.searchInput}
          placeholder="Dinosaur Name"
          value={query}
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
