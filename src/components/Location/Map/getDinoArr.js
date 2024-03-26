// function that checks if the dinosaur is found in more than one country.
// If so, it duplicates the dinosaur object so that there is a pin for each country.
export const getDinoArr = (dinoData, dino) => {
  let array = [];
  const numCountriesDinoFoundIn = dino?.foundIn?.split(",");
  if (numCountriesDinoFoundIn.length > 1) {
    numCountriesDinoFoundIn.forEach((country) => {
      const dupDino = {
        ...dino,
        foundIn: country.trim().replace(",", ""),
      };
      array = [...array, dupDino];
    });
  } else {
    array = [dinoData];
  }
  return array;
};
