export const handleSubmit = (
  e,
  form,
  setForm,
  initialFormState,
  searchResults,
  setFilteredData,
  getCountryCheckboxes,
  setIsFilterDrawerOpen
) => {
  e.preventDefault();

  // resets filtered data so it doesnt add to previous filtered  data
  setFilteredData([]);

  // DIET
  //  if a diet checkbox is checked then these if statements will filter that diet
  if (form.herbivorous) {
    const filteredResults = searchResults.filter(
      (item) => item.diet === "herbivorous"
    );
    setFilteredData((prev) => [...prev, ...filteredResults]);
  }
  if (form.carnivorous) {
    const filteredResults = searchResults.filter(
      (item) => item.diet === "carnivorous"
    );
    setFilteredData((prev) => [...prev, ...filteredResults]);
  }
  if (form.omnivorous) {
    const filteredResults = searchResults.filter(
      (item) => item.diet === "omnivorous"
    );
    setFilteredData((prev) => [...prev, ...filteredResults]);
  }

  // WEIGHT
  //  if a weight checkbox is checked then these if statements will filter that weight
  if (form.below100kg) {
    const filteredResults = searchResults.filter((item) => item.weight < 100);
    setFilteredData((prev) => [...prev, ...filteredResults]);
  }
  if (form.Above100kgBelow1000kg) {
    const filteredResults = searchResults.filter(
      (item) => item.weight > 100 && item.weight < 1000
    );
    setFilteredData((prev) => [...prev, ...filteredResults]);
  }
  if (form.higherThan1000kg) {
    const filteredResults = searchResults.filter((item) => item.weight > 1000);
    setFilteredData((prev) => [...prev, ...filteredResults]);
  }
  if (form.NAWeight) {
    const filteredResults = searchResults.filter(
      (item) => item.weight === "N/A"
    );
    setFilteredData((prev) => [...prev, ...filteredResults]);
  }

  // LENGTH
  //  if a length checkbox is checked then these if statements will filter that length
  if (form.below1m) {
    const filteredResults = searchResults.filter((item) => item.length < 1);
    setFilteredData((prev) => [...prev, ...filteredResults]);
  }
  if (form.Above1mBelow10m) {
    const filteredResults = searchResults.filter(
      (item) => item.length > 1 && item.length < 10
    );
    setFilteredData((prev) => [...prev, ...filteredResults]);
  }
  if (form.higherThan10m) {
    const filteredResults = searchResults.filter((item) => item.length > 10);
    setFilteredData((prev) => [...prev, ...filteredResults]);
  }
  if (form.NALength) {
    const filteredResults = searchResults.filter(
      (item) => item.length === "N/A"
    );
    setFilteredData((prev) => [...prev, ...filteredResults]);
  }

  // COUNTRY
  //  if a country checkbox is checked then these if statements will filter that country
  getCountryCheckboxes().forEach((country) => {
    if (form[country]) {
      console.log(country);
      const filteredResults = searchResults.filter((item) =>
        item.foundIn.includes(country)
      );
      setFilteredData((prev) => [...prev, ...filteredResults]);
    }
  });

  // removes duplicates
  setFilteredData((prev) => [...new Set(prev)]);

  setTimeout(() => {
    setIsFilterDrawerOpen(false);
    setForm(initialFormState);
  }, 1000);
};
