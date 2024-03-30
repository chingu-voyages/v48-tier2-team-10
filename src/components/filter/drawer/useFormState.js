import useAccordianData from "./useAccordianData";

export default function useFormState() {
  // get accordian (ie titles and checkboses) data - this is dynamic eg search results may only have herbivorous dinos and not carni and omni, so will only display herbiv in the diet accordian
  const {
    getCountryCheckboxes,
    getDietCheckboxes,
    getLengthCheckboxes,
    getWeightCheckboxes,
    accordionData,
  } = useAccordianData();

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

  // the coutnries for the inital form stateis dynamic - depends on the countries from the search results, this is so dont get a huge list of all coutnreis if  not needed
  const getCountryInitialformState = () => {
    let x = {};
    getCountryCheckboxes().forEach((item) => {
      x = { ...x, [item]: false };
    });
    return x;
  };

  // call the above function
  const countryInitialformState = getCountryInitialformState();

  // finally puts the initial form state together
  const initialFormState = {
    ...partInitialFormState,
    ...countryInitialformState,
  };
  // console.log(initialFormState);
  return initialFormState;
}
