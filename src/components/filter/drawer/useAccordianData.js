// this function generates the accordians ie title and checkboxes

export default function useAccordianData(searchResults) {
  const getDietCheckboxes = () => {
    let arr = [];
    searchResults?.some((item) => {
      if (item.diet === "carnivorous") {
        arr = [...arr, "carnivorous"];
      }
      if (item.diet === "herbivorous") {
        arr = [...arr, "herbivorous"];
      }
      if (item.diet === "omnivorous") {
        arr = [...arr, "omnivorous"];
      }
    });
    return [...new Set(arr)].sort();
  };

  const getCountryCheckboxes = () => {
    let arr = [];
    searchResults?.forEach((item) => {
      let country = item.foundIn.split(",");
      if (country.length > 1) {
        const removeWhiteSpace = country.map((item) => item.trim());
        country = removeWhiteSpace;
      }
      arr = [...arr, country].flat().sort();
    });
    // console.log([...new Set(arr)]);
    return [...new Set(arr)];
  };

  const getWeightCheckboxes = () => {
    let arr = [];
    searchResults?.some((item) => {
      if (item.weight < 100) {
        arr = [...arr, "ABelow 100kg"];
      }
      if (item.weight > 100 && item.weight < 1000) {
        arr = [...arr, "B100kg-1000kg"];
      }
      if (item.weight > 1000) {
        arr = [...arr, "CHigher than 1000kg"];
      }
      if (item.weight === "N/A") {
        arr = [...arr, "DN/A"];
      }
    });
    return [...new Set(arr)].sort().map((string) => string.substring(1));
  };

  const getLengthCheckboxes = () => {
    let arr = [];
    searchResults?.some((item) => {
      if (item.length < 1) {
        arr = [...arr, "ABelow 1m"];
      }
      if (item.length > 1 && item.length < 10) {
        arr = [...arr, "B1m-10m"];
      }
      if (item.length > 10) {
        arr = [...arr, "CHigher than 10m"];
      }
      if (item.length === "N/A") {
        arr = [...arr, "DN/A"];
      }
    });
    return [...new Set(arr)].sort().map((string) => string.substring(1));
  };

  const accordionData = [
    {
      title: "diet",
      checkboxes: getDietCheckboxes(),
    },
    {
      title: "country",
      checkboxes: getCountryCheckboxes(),
    },
    {
      title: "weight",
      checkboxes: getWeightCheckboxes(),
    },
    {
      title: "length",
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
