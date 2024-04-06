function compareValues(a, b, isAscending) {
  if (a === 'N/A') return 1
  if (b === 'N/A') return -1
  return isAscending ? Number(a) - Number(b) : Number(b) - Number(a)
}

// Sort by name A-Z
export const sortNameAZ = (data) => {
  let sortedData = [...data]
  return sortedData.sort((a, b) => a.name.localeCompare(b.name))
}

// Sort by name Z-A
export const sortNameZA = (data) => {
  let sortedData = [...data]
  return sortedData.sort((a, b) => b.name.localeCompare(a.name))
}

// Sort by weight low to high
export function sortByWeightLowHigh(data) {
  let sortedData = [...data]
  return sortedData.sort((a, b) => compareValues(a.weight, b.weight, true))
}

// Sort by weight high to low
export function sortByWeightHighLow(data) {
  let sortedData = [...data]
  return sortedData.sort((a, b) => compareValues(a.weight, b.weight, false))
}

// Sort by length low to high
export function sortByLengthLowHigh(data) {
  let sortedData = [...data]
  return sortedData.sort((a, b) => compareValues(a.length, b.length, true))
}

// Sort by length high to low
export function sortByLengthHighLow(data) {
  let sortedData = [...data]
  return sortedData.sort((a, b) => compareValues(a.length, b.length, false))
}
