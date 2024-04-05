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
  sortNameAZ,
  sortNameZA,
  sortByWeightHighLow,
  sortByWeightLowHigh,
} from "../components/Sort/sort-helper";

export default function SearchPage() {
  const { dinoData } = useContext(DinoDataContext);

  const [searchResults, setSearchResults] = useState();

  const [filteredData, setFilteredData] = useState([]);

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const [remountComponent, setRemountComponent] = useState(0);

  const { currentItems, pageCount, handlePageClick, setItemOffset } =
    usePagination(12, filteredData);
  // the number is how many cards is shown on a page at a time, can be changed

  useEffect(() => {
    setSearchResults(dinoData);
    setFilteredData(dinoData);
  }, [dinoData]);

  const handleSelect = (selectedOption) => {
    let sortedData;
    const dupFilteredData = [...filteredData];
    // console.log(dupFilteredData)

    switch (selectedOption) {
      case "":
        sortedData = dupFilteredData;
        break;
      case "nameAZ":
        sortedData = sortNameAZ(dupFilteredData);
        break;
      case "nameZA":
        sortedData = sortNameZA(dupFilteredData);
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
    setItemOffset(0);
    setRemountComponent(Math.random());
  };

  return (
    <div className={styles.searchPageContainer}>
      <SearchBar
        setSearchResults={setSearchResults}
        dinoData={dinoData}
        setFilteredData={setFilteredData}
        setItemOffset={setItemOffset}
      />

      {currentItems.length > 0 ? (
        <p className={styles.total}>Total {filteredData?.length} Dinosaurs</p>
      ) : (
        <p className={styles.skeletonTotal}></p>
      )}

      <div className={styles.filterSortContainer}>
        <button
          className={styles.filterBtn}
          onClick={() => setIsFilterDrawerOpen(true)}
        >
          Filter
        </button>

        <Sort handleSelect={handleSelect} />
      </div>

      <DisplaySearchResults currentItems={currentItems} />

      <div className={styles.paginationContainer}>
        <Pagination
          pageCount={pageCount}
          handlePageClick={handlePageClick}
          remountComponent={remountComponent}
        />
      </div>

      <FilterDrawer
        searchResults={searchResults}
        isFilterDrawerOpen={isFilterDrawerOpen}
        setIsFilterDrawerOpen={setIsFilterDrawerOpen}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        setItemOffset={setItemOffset}
        setRemountComponent={setRemountComponent}
      />
    </div>
  );
}
