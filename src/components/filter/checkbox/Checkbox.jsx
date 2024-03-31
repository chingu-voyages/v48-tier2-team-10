import useLookUp from "./useLookUp";
import { getName } from "./getName";
import styles from "./Checkbox.module.css";
export default function Checkbox({ checkbox, form, setForm, checkboxes }) {
  // bc the checkbox labels are diff to the keys in the intial form data this is used to lookup and make a connection between the two eg label of "100kg-1000kg" will return Above100kgBelow1000kg, which is the key in the form
  const lookUp = useLookUp(checkboxes);

  // when checkbox is checked/unchecked this function fires and changes the initial form data accordingly
  const handleToggle = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.checked,
      };
    });
  };

  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        onChange={handleToggle}
        name={getName(lookUp, checkbox)}
        checked={form[getName(lookUp, checkbox)]}
        id={checkbox}
        className={styles.checkbox}
      />

      <label htmlFor={checkbox} className={styles.checkboxLabel}>
        {checkbox}
      </label>
    </div>
  );
}
