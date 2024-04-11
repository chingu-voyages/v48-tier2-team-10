import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DinoDataContext = createContext();

export function DinoDataContextProvider({ children }) {
  const [dinoData, setDinoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dietData, setDietData] = useState([]);
  const [typeData, setTypeData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(false);
      try {
        const { data } = await axios.get(
          "https://chinguapi.onrender.com/dinosaurs"
        );
        // throw new Error("error");
        setDinoData(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const diet = {
      carnivorous: 0,
      herbivorous: 0,
      omnivorous: 0,
      extras: 0,
      unknown: 0,
    };

    dinoData.forEach((dinosaur) => {
      if (dinosaur.diet === "carnivorous") {
        diet.carnivorous++;
      }
      if (dinosaur.diet === "omnivorous") {
        diet.omnivorous++;
      }
      if (dinosaur.diet === "herbivorous") {
        diet.herbivorous++;
      }
      if (dinosaur.diet === "herbivorous or omnivorous") {
        diet.extras++;
      }
      if (
        ![
          "omnivorous",
          "carnivorous",
          "herbivorous",
          "herbivorous or omnivorous",
        ].includes(dinosaur.diet)
      ) {
        diet.unknown = (diet.unknown || 0) + 1;
      }
      console.log(diet.unknown);
    });

    const dietData = [
      {
        id: "Carnivorous",
        label: "Carnivorous",
        value: Math.floor((diet.carnivorous / dinoData.length) * 100),
        color: "hsl(208,70%,50%)",
      },
      {
        id: "herbivorous",
        label: "Herbivorous",
        value: Math.floor((diet.herbivorous / dinoData.length) * 100),
        color: "hsl(269, 70%, 50%)",
      },
      {
        id: "Omnivorous",
        label: "Omnivorous",
        value: Math.floor((diet.omnivorous / dinoData.length) * 100),
        color: "hsl(152, 70%, 50%)",
      },
      {
        id: "herbivorous or omnivorous",
        label: "Herbi / Omnivorous",
        value: Math.ceil((diet.extras / dinoData.length) * 100),
        color: "hsl(82,70%,50%)",
      },
      {
        id: "unknown",
        label: "Unknown",
        value: Math.ceil((diet.unknown / dinoData.length) * 100),
        color: "hsl(82,70%,50%)",
      },
    ];

    setDietData(dietData);
  }, [dinoData]);

  useEffect(() => {
    const type = {
      prosauropod: 0,
      large_theropod: 0,
      ceratopsian: 0,
      sauropod: 0,
      small_theropod: 0,
      armoured_dinosaur: 0,
      large_ornithopod: 0,
      small_ornithopod: 0,
      early_dinosaur: 0,
    };

    dinoData.forEach((dinosaur) => {
      switch (dinosaur.typeOfDinosaur) {
        case "prosauropod":
          type.prosauropod++;
          break;
        case "large theropod":
          type.large_theropod++;
          break;
        case "ceratopsian":
          type.ceratopsian++;
          break;
        case "sauropod":
          type.sauropod++;
          break;
        case "small theropod":
          type.small_theropod++;
          break;
        case "armoured dinosaur":
          type.armoured_dinosaur++;
          break;
        case "large ornithopod":
          type.large_ornithopod++;
          break;
        case "small ornithopod":
          type.small_ornithopod++;
          break;
        case "early dinosaur":
          type.early_dinosaur++;
          break;
        default:
          break;
      }
    });
    const typeData = [
      {
        id: "prosauropod",
        label: "Prosauropod",
        value: type.prosauropod,
        color: "hsl(87, 70%, 50%)",
      },
      {
        id: "Large Theropod",
        label: "Large Theropod",
        value: type.large_theropod,
        color: "hsl(148, 70%, 50%)",
      },
      {
        id: "Ceratopsian",
        label: "Ceratopsian",
        value: type.ceratopsian,
        color: "hsl(254, 70%, 50%)",
      },
      { id: "sauropod", label: "Sauropod", value: type.sauropod, color: "" },
      {
        id: "Small Theropod",
        label: "Small Theropod",
        value: type.small_theropod,
        color: "hsl(246, 70%, 50%)",
      },
      {
        id: "Armoured Dinosaur",
        label: "Armoured Dinosaur",
        value: type.armoured_dinosaur,
        color: "hsl(93, 70%, 50%)",
      },
      {
        id: "Large Ornithopod",
        label: "Large Ornithopod",
        value: type.large_ornithopod,
        color: "hsl(208, 70%, 50%)",
      },
      {
        id: "Small Ornithopod",
        label: "Small Ornithopod",
        value: type.small_ornithopod,
        color: "hsl(173, 70%, 50%)",
      },
      {
        id: "Early Dinosaur",
        label: "Early Dinosaur",
        value: type.early_dinosaur,
        color: "hsl(151, 70%, 50%)",
      },
    ];

    setTypeData(typeData);
  }, [dinoData]);

  return (
    <DinoDataContext.Provider
      value={{
        dinoData,
        loading,
        error,
        dietData,
        typeData,
      }}
    >
      {children}
    </DinoDataContext.Provider>
  );
}
