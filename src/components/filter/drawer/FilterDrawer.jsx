import { useState } from "react";
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
  setIsFilterDrawerOpen,
  filteredData,
  setFilteredData,
  setItemOffset,
  setRemountComponent,
}) {
  // generate initial form state
  const initialFormState = useFormState(searchResults);

  const [form, setForm] = useState(initialFormState);

  // gets accordion data
  const { getCountryCheckboxes, accordionData } =
    useAccordianData(searchResults);

  // function to close drawer when user clicks on overlay
  const handleCloseOverlay = (e) => {
    if (e.target.id === "overlay") {
      setIsFilterDrawerOpen(false);
    }
  };

  // function to close drawer
  const handleClose = () => {
    setIsFilterDrawerOpen(false);
  };

  // function for reset button
  const handleReset = () => {
    setFilteredData(searchResults);
    setForm(initialFormState);
  };

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
              setItemOffset,
              setRemountComponent
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
