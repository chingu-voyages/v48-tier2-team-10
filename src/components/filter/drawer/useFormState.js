import useAccordianData from "./useAccordianData";

export default function useFormState(searchResults) {
  // gets countries from search results
  const { getCountryCheckboxes } = useAccordianData(searchResults);

  // diet, length and weight is hardcoded for the initial form state
  const partInitialFormState = {
    herbivorous: false,
    carnivorous: false,
    omnivorous: false,
    below100kg: false,
    Above100kgBelow1000kg: false,
    higherThan1000kg: false,
    NAWeight: false,
    below1m: false,
    Above1mBelow10m: false,
    higherThan10m: false,
    NALength: false,
  };

  // the countries for the inital form state is dynamic ie depends on the countries from the search results, this is so dont get a huge list of all countries if not needed
  const getCountryInitialformState = () => {
    let countries = {};
    getCountryCheckboxes().forEach((country) => {
      countries = { ...countries, [country]: false };
    });
    return countries;
  };

  // call the above function
  const countryInitialformState = getCountryInitialformState();

  // finally puts the initial form state together
  const initialFormState = {
    ...partInitialFormState,
    ...countryInitialformState,
  };

  return initialFormState;
}
