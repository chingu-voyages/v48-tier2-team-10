import { getLatLong } from "../components/Location/Map/getLatLong";

export const getCountries = (dinoData) => {
  const allCountries = dinoData
    .map((dino) => dino.foundIn)
    .map((country) => country.split(","))
    .flat()
    .map((country) => country.trim())
    .map((country) => {
      return {
        position: getLatLong(country),
      };
    });

  return [...new Set(allCountries)];
};
