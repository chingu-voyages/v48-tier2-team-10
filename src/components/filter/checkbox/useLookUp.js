export default function useLookUp(checkboxes) {
  const getCountriesLookUp = () => {
    let countries = {};
    checkboxes.forEach((country) => {
      countries = { ...countries, [country]: country };
    });
    return countries;
  };

  const countriesLookUp = getCountriesLookUp();

  const lookUp = {
    herbivorous: "herbivorous",
    carnivorous: "carnivorous",
    omnivorous: "omnivorous",
    below100kg: "Below 100kg",
    Above100kgBelow1000kg: "100kg-1000kg",
    higherThan1000kg: "Higher than 1000kg",

    below1m: "Below 1m",
    Above1mBelow10m: "1m-10m",
    higherThan10m: "Higher than 10m",
    NALength: "N/A",
    NAWeight: "N/A",
    ...countriesLookUp,
  };

  return lookUp;
}
