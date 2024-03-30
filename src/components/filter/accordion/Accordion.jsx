import { useState } from "react";
import Checkbox from "../checkbox/Checkbox";
import styles from "./Accordian.module.css";

export default function Accordion({
  title,
  setFilteredData,
  form,
  setForm,
  checkboxes,
}) {
  const [isActive, setIsActive] = useState(false);

  // console.log(checkboxes);

  const checkboxEl = checkboxes?.map((checkbox) => (
    <Checkbox
      key={checkbox}
      checkbox={checkbox}
      setFilteredData={setFilteredData}
      form={form}
      setForm={setForm}
      checkboxes={checkboxes}
    />
  ));

  return (
    <div className={styles.accordionItem}>
      <div
        className={styles.accordionTitle}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className={styles.accordionContent}>{checkboxEl}</div>}
    </div>
  );
}
