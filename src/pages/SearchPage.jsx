import { useState, useContext, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { DinoDataContext } from "../context/DinoDataContext";
import FilterDrawer from "../components/filter/drawer/FilterDrawer";
import styles from "./SearchPage.module.css";
import Pagination from "../components/Pagination/Pagination";
import DisplaySearchResults from "../components/DisplaySearchResults/DisplaySearchResults";
import usePagination from "../components/Pagination/usePagination";

export default function SearchPage() {
  const { dinoData } = useContext(DinoDataContext);
  const [searchResults, setSearchResults] = useState();
  // console.log(searchResults);

  const [filteredData, setFilteredData] = useState([]);
  // console.log(filteredData);

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const { currentItems, pageCount, handlePageClick, setItemOffset } =
    usePagination(10, filteredData);

  useEffect(() => {
    setSearchResults(dinoData);
    setFilteredData(dinoData);
  }, [dinoData]);

  return (
    <>
      <SearchBar
        setSearchResults={setSearchResults}
        dinoData={dinoData}
        setFilteredData={setFilteredData}
        setItemOffset={setItemOffset}
      />

      <button
        className={styles.filterBtn}
        onClick={() => setIsFilterDrawerOpen(true)}
      >
        Filter
      </button>

      <DisplaySearchResults
        filteredData={filteredData}
        currentItems={currentItems}
      />

      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />

      <FilterDrawer
        searchResults={searchResults}
        isFilterDrawerOpen={isFilterDrawerOpen}
        setIsFilterDrawerOpen={setIsFilterDrawerOpen}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        setItemOffset={setItemOffset}
      />
    </>
  );
}
