import { useState, useContext, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { DinoDataContext } from "../context/DinoDataContext";
import FilterDrawer from "../components/filter/drawer/FilterDrawer";
import styles from "./SearchPage.module.css";
import Pagination from "../components/Pagination/Pagination";
import DisplaySearchResults from "../components/DisplaySearchResults/DisplaySearchResults";
import usePagination from "../components/Pagination/usePagination";
import Sort from "../components/Sort/Sort";
import {
  sortByLengthHighLow,
  sortByLengthLowHigh,
  sortByNameAZ,
  sortByNameZA,
  sortByWeightHighLow,
  sortByWeightLowHigh,
} from "../components/Sort/sort-helper";

export default function SearchPage() {
  const { dinoData } = useContext(DinoDataContext);
  const [searchResults, setSearchResults] = useState();
  // console.log(searchResults);

  const [filteredData, setFilteredData] = useState([]);
  // console.log(filteredData);

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const { currentItems, pageCount, handlePageClick, setItemOffset } =
    usePagination(10, filteredData);
  // the number is how many cards is shown on a page at a time, can be changed

  useEffect(() => {
    setSearchResults(dinoData);
    setFilteredData(dinoData);
  }, [dinoData]);

  const handleSelect = (selectedOption) => {
    let sortedData;
    const dupFilteredData = [...filteredData];
    switch (selectedOption) {
      case "nameAZ":
        sortedData = sortByNameAZ(dupFilteredData);
        break;
      case "nameZA":
        sortedData = sortByNameZA(dupFilteredData);
        break;
      case "weightHighLow":
        sortedData = sortByWeightHighLow(dupFilteredData);
        break;
      case "weightLowHigh":
        sortedData = sortByWeightLowHigh(dupFilteredData);
        break;
      case "lengthHighLow":
        sortedData = sortByLengthHighLow(dupFilteredData);
        break;
      case "lengthLowHigh":
        sortedData = sortByLengthLowHigh(dupFilteredData);
        break;
      default:
        break;
    }

    setFilteredData(sortedData);
  };

  return (
    <>
      <SearchBar
        setSearchResults={setSearchResults}
        dinoData={dinoData}
        setFilteredData={setFilteredData}
        setItemOffset={setItemOffset}
      />

      <p className={styles.total}>Total {filteredData?.length} Dinosaurs</p>

      <button
        className={styles.filterBtn}
        onClick={() => setIsFilterDrawerOpen(true)}
      >
        Filter
      </button>

      <Sort handleSelect={handleSelect} />

      <DisplaySearchResults currentItems={currentItems} />

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
