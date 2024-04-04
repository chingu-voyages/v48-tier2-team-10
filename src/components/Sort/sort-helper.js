// Sort by name A-Z
export function sortByNameAZ(arr) {
  return arr.sort((a, b) => a.name.localeCompare(b.name));
}

// Sort by name Z-A
export function sortByNameZA(arr) {
  return arr.sort((a, b) => b.name.localeCompare(a.name));
}

// Sort by weight low to high
export function sortByWeightLowHigh(arr) {
  return arr.sort((a, b) => a.weight - b.weight);
}

// Sort by weight high to low
export function sortByWeightHighLow(arr) {
  return arr.sort((a, b) => b.weight - a.weight);
}

// Sort by length low to high
export function sortByLengthLowHigh(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

// Sort by length high to low
export function sortByLengthHighLow(arr) {
  return arr.sort((a, b) => b.length - a.length);
}
