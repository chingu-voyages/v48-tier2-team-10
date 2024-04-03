import { useState, useEffect } from "react";
import Accordion from "../accordion/Accordion";
import useAccordianData from "./useAccordianData";
import useFormState from "./useFormState";
import styles from "./FilterDrawer.module.css";
import closeIcon from "../../../assets/close.png";
import { handleSubmit } from "./handleSubmit";

// https://www.kindacode.com/article/react-create-an-animated-side-navigation-from-scratch/

export default function FilterDrawer({
  searchResults,
  isFilterDrawerOpen,
  setIsFilterDrawerOpen
  filteredData,
  setFilteredData,
  setItemOffset,
}) {
  // generate initial form state
  const initialFormState = useFormState(searchResults)

  const [form, setForm] = useState(initialFormState);
  // gets accordion data
  const { getCountryCheckboxes, accordionData } =
    useAccordianData(searchResults);

  // to stop body scroll when filter drawer is open - this seems an odd way to do it, does anyone know of a better way?
  useEffect(() => {
    if (isFilterDrawerOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [isFilterDrawerOpen]);

  // function to close drawer when user clicks on overlay
  const handleCloseOverlay = (e) => {
    if (e.target.id === "overlay") {
      setIsFilterDrawerOpen(false);
    }
  };

  // function to close drawer
  const handleClose = () => {
    setIsFilterDrawerOpen(false);
    // rest to initial form state?
    // setForm(initialFormState);
  };

  // function for reset button
  const handleReset = () => {
    // reset filtered data?
    setFilteredData(searchResults);
    setForm(initialFormState);
  };

  // console.log(filteredData);

  return (
    <div
      className={` ${isFilterDrawerOpen ? styles.overlay : ""}`}
      onClick={handleCloseOverlay}
      id="overlay"
    >
      <div
        className={`${styles.drawer} ${
          isFilterDrawerOpen ? styles.drawerActive : ""
        }`}
      >
        <div className={styles.header}>
          <span className={styles.heading}>Filter</span>

          <button className={styles.closeButton} onClick={handleClose}>
            <img src={closeIcon} alt="" />
          </button>
        </div>

        <form
          onSubmit={(e) =>
            handleSubmit(
              e,
              form,
              setForm,
              initialFormState,
              searchResults,
              setFilteredData,
              getCountryCheckboxes,
              setIsFilterDrawerOpen,
              setItemOffset
            )
          }
          className={styles.filterForm}
        >
          <div className={styles.accordionContainer}>
            {accordionData.map(({ title, checkboxes }) => (
              <Accordion
                key={title}
                title={title}
                form={form}
                setForm={setForm}
                checkboxes={checkboxes}
              />
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <button
              type="button"
              onClick={handleReset}
              className={styles.resetBtn}
            >
              Reset
            </button>
            <button type="submit" className={styles.submitBtn}>
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
