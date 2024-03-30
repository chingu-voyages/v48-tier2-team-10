// funct fires when form submitted
export default function getHandleSubmit(
  form,
  searchResults,
  setFilteredData,
  getCountryCheckboxes,
  setIsFilterDrawerOpen,
  setForm,
  initialFormState
) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    //  if herb, carn or omni is checked if goes throught these if statements that filters that diet
    // diet
    if (form.herbivorous) {
      const u = searchResults.filter((item) => item.diet === "herbivorous");
      setFilteredData((prev) => [...prev, ...u]);
    }
    if (form.carnivorous) {
      const u = searchResults.filter((item) => item.diet === "carnivorous");
      setFilteredData((prev) => [...prev, ...u]);
    }
    if (form.omnivorous) {
      const u = searchResults.filter((item) => item.diet === "omnivorous");
      setFilteredData((prev) => [...prev, ...u]);
    }

    //  if weigth option is checked if goes throught these if statements that filters that weight
    // weight
    if (form.below100kg) {
      const u = searchResults.filter((item) => item.weight < 100);
      setFilteredData((prev) => [...prev, ...u]);
    }
    if (form.Above100kgBelow1000kg) {
      const u = searchResults.filter(
        (item) => item.weight > 100 && item.weight < 1000
      );
      setFilteredData((prev) => [...prev, ...u]);
    }
    if (form.higherThan1000kg) {
      const u = searchResults.filter((item) => item.weight > 1000);
      setFilteredData((prev) => [...prev, ...u]);
    }
    if (form.NAWeight) {
      const u = searchResults.filter((item) => item.weight === "N/A");
      setFilteredData((prev) => [...prev, ...u]);
    }

    //  if legnth option is checked if goes throught these if statements that filters that legnth
    // length
    if (form.below1m) {
      const u = searchResults.filter((item) => item.length < 1);
      setFilteredData((prev) => [...prev, ...u]);
    }
    if (form.Above1mBelow10m) {
      const u = searchResults.filter(
        (item) => item.length > 1 && item.length < 10
      );
      setFilteredData((prev) => [...prev, ...u]);
    }
    if (form.higherThan10m) {
      const u = searchResults.filter((item) => item.length > 10);
      setFilteredData((prev) => [...prev, ...u]);
    }
    if (form.NALength) {
      const u = searchResults.filter((item) => item.length === "N/A");
      setFilteredData((prev) => [...prev, ...u]);
    }

    //  if country option is checked if goes throught these if statements that filters that country
    // country
    getCountryCheckboxes().forEach((country) => {
      // console.log(item);
      if (form[country]) {
        console.log(country);
        const u = searchResults.filter((item) =>
          item.foundIn.includes(country)
        );
        setFilteredData((prev) => [...prev, ...u]);
      }
    });

    // removes doplicates
    // for apply bustton
    setFilteredData((prev) => [...new Set(prev)]);

    setTimeout(() => {
      setIsFilterDrawerOpen(false);
      // setForm(initialFormState);
    }, 1000);

    // for reset and close drawwer buttons
  };

  return handleSubmit;
}
