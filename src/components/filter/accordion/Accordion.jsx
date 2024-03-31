import { useState } from "react";
import Checkbox from "../checkbox/Checkbox";
import styles from "./Accordian.module.css";
import addIcon from "../../../assets/add.png";
import subtractIcon from "../../../assets/subtract.png";

export default function Accordion({ title, form, setForm, checkboxes }) {
  const [isActive, setIsActive] = useState(false);

  const checkboxEl = checkboxes?.map((checkbox) => (
    <Checkbox
      key={checkbox}
      checkbox={checkbox}
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
        <div className={styles.accordi}>{title}</div>
        <div>
          {isActive ? (
            <img src={subtractIcon} alt="subtract icon" />
          ) : (
            <img src={addIcon} alt="add icon" />
          )}
        </div>
      </div>
      {isActive && <div className={styles.accordionContent}>{checkboxEl}</div>}
    </div>
  );
}
