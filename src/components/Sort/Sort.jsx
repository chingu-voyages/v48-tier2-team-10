import { useState } from 'react'
import styles from './Sort.module.css'

const Sort = ({ handleSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const handler = (e) => {
    setSelectedOption(e.target.value)
    handleSelect(selectedOption)
  }
  return (
    <div className={styles.wrapper}>
      <p>Sort by:</p>
      <select onChange={handler}>
        <option value="">Select</option>
        <option value="nameAZ">Name A-Z</option>
        <option value="nameZA">Name Z-A</option>
        <option value="weightHighLow">Weight: High to Low</option>
        <option value="weightLowHigh">Weight: Low to High</option>
        <option value="lengthHighLow">Length: High to Low</option>
        <option value="lengthLowHigh">Length: Low to High</option>
      </select>
    </div>
  )
}

export default Sort
