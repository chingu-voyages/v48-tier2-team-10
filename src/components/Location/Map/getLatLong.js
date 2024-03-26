import { countries } from "./countries";

// function to update each dino object in the dinoArr with latitude and longitude
export const getLatLong = (foundIn) => {
  return countries?.find((country) => country.country === foundIn);
};
