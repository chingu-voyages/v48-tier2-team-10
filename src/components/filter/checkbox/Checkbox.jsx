import useLookUp from "./useLookUp";
import { getName } from "./getName";
import styles from "./Checkbox.module.css";
export default function Checkbox({
  checkbox,
  setFilteredData,
  form,
  setForm,
  checkboxes,
}) {
  // bc the checkbox labels are diff to the keys in the intial form data this is used to lookup and make a connection between the two eg: label of "100kg-1000kg" will retrun Above100kgBelow1000kg, which is the key inthe form
  const lookUp = useLookUp(checkboxes);

  // when checkbox is checked/unchecked this function fires and sets the chnages the initial form data accordingly to the
  const handleToggle = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.checked,
      };
    });

    // resets filtered data so if user makes changes it doesnt use add to old data
    setFilteredData([]);
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={handleToggle}
        name={getName(lookUp, checkbox)}
        checked={form[getName(lookUp, checkbox)]}
        id={checkbox}
      />

      <label htmlFor={checkbox}> {checkbox}</label>
    </div>
  );
}
