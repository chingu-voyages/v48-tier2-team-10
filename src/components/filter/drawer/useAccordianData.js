// this function generates the data for the accordions ie title and checkboxes

export default function useAccordianData(searchResults) {
  const getDietCheckboxes = () => {
    let arr = [];
    searchResults?.some((dino) => {
      if (dino.diet === "carnivorous") {
        arr = [...arr, "carnivorous"];
      }
      if (dino.diet === "herbivorous") {
        arr = [...arr, "herbivorous"];
      }
      if (dino.diet === "omnivorous") {
        arr = [...arr, "omnivorous"];
      }
    });
    return [...new Set(arr)].sort();
  };

  const getCountryCheckboxes = () => {
    let arr = [];
    searchResults?.forEach((dino) => {
      let country = dino.foundIn.split(",");
      if (country.length > 1) {
        const removeWhiteSpace = country.map((dino) => dino.trim());
        country = removeWhiteSpace;
      }
      arr = [...arr, country].flat().sort();
    });
    return [...new Set(arr)];
  };

  const getWeightCheckboxes = () => {
    let arr = [];
    searchResults?.some((dino) => {
      if (dino.weight < 100) {
        arr = [...arr, "ABelow 100kg"];
      }
      if (dino.weight > 100 && dino.weight < 1000) {
        arr = [...arr, "B100kg-1000kg"];
      }
      if (dino.weight > 1000) {
        arr = [...arr, "CHigher than 1000kg"];
      }
      if (dino.weight === "N/A") {
        arr = [...arr, "DN/A"];
      }
    });
    return [...new Set(arr)].sort().map((string) => string.substring(1));
  };

  const getLengthCheckboxes = () => {
    let arr = [];
    searchResults?.some((dino) => {
      if (dino.length < 1) {
        arr = [...arr, "ABelow 1m"];
      }
      if (dino.length > 1 && dino.length < 10) {
        arr = [...arr, "B1m-10m"];
      }
      if (dino.length > 10) {
        arr = [...arr, "CHigher than 10m"];
      }
      if (dino.length === "N/A") {
        arr = [...arr, "DN/A"];
      }
    });
    return [...new Set(arr)].sort().map((string) => string.substring(1));
  };

  const accordionData = [
    {
      title: "Diet",
      checkboxes: getDietCheckboxes(),
    },
    {
      title: "Country",
      checkboxes: getCountryCheckboxes(),
    },
    {
      title: "Weight",
      checkboxes: getWeightCheckboxes(),
    },
    {
      title: "Length",
      checkboxes: getLengthCheckboxes(),
    },
  ];

  return {
    getCountryCheckboxes,
    getDietCheckboxes,
    getLengthCheckboxes,
    getWeightCheckboxes,
    accordionData,
  };
}
