import { useState } from "react";
import Accordion from "../accordion/Accordion";
import useAccordianData from "./useAccordianData";
import useFormState from "./useFormState";
import getHandleSubmit from "./getHandleSubmit";
import styles from "./FilterDrawer.module.css";
import closeIcon from "../../../assets/close.png";

// https://www.kindacode.com/article/react-create-an-animated-side-navigation-from-scratch/

export default function FilterDrawer({
  searchResults,
  isFilterDrawerOpen,
  setIsFilterDrawerOpen,
}) {
  // const [isOpen, setIsOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  // generate initial form state
  const initialFormState = useFormState();

  const [form, setForm] = useState(initialFormState);
  // console.log(initialFormState);

  // gets accordian data
  const {
    getCountryCheckboxes,
    // getDietCheckboxes,
    // getLengthCheckboxes,
    // getWeightCheckboxes,
    accordionData,
  } = useAccordianData(searchResults);
  // console.log(accordionData);

  // function that fires when form is submitted
  const handleSubmit = getHandleSubmit(
    form,
    searchResults,
    setFilteredData,
    getCountryCheckboxes,
    setIsFilterDrawerOpen,
    setForm,
    initialFormState
  );

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  console.log(filteredData);

  const handleReset = () => {
    setFilteredData([]);
    setForm(initialFormState);
  };

  const handleClose = () => {
    setIsFilterDrawerOpen(false);
    // handleReset();
    // setForm(initialFormState);
  };

  const handleCloseOverlay = (e) => {
    if (e.target.id === "overlay") {
      setIsFilterDrawerOpen(false);
    }
  };

  return (
    <div
      className={` ${isFilterDrawerOpen ? styles.overlay : ""}`}
      onClick={handleCloseOverlay}
      id="overlay"
    >
      <div
        className={`${styles.sideNav} ${
          isFilterDrawerOpen ? styles.sideNavActive : ""
        }`}
      >
        <div className={styles.header}>
          <span className={styles.heading}>Filter</span>

          <button className={styles.closeButton} onClick={handleClose}>
            <img src={closeIcon} alt="" />
          </button>
        </div>
        {/* <hr /> */}
        <form onSubmit={handleSubmit} className={styles.filterForm}>
          {/* accordian  container*/}
          <div className={styles.accordionContainer}>
            {accordionData.map(({ title, checkboxes }) => (
              <Accordion
                key={title}
                title={title}
                setFilteredData={setFilteredData}
                form={form}
                setForm={setForm}
                checkboxes={checkboxes}
              />
            ))}
          </div>
          <button type="submit">submit</button>
          <button onClick={handleReset}>reset</button>
        </form>
      </div>
    </div>
  );
}
