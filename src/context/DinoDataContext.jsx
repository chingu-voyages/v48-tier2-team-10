import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const DinoDataContext = createContext()

export function DinoDataContextProvider({ children }) {
  const [dinoData, setDinoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dietData, setDietData] = useState([]);
  const [typeData,setTypeData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError(false)
      try {
        const { data } = await axios.get(
          'https://chinguapi.onrender.com/dinosaurs'
        )
        // throw new Error("error");
        setDinoData(data)
      } catch (error) {
        console.error(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const diet = {
      carnivorous: 0,
      herbivorous: 0,
      omnivorous: 0
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
    });

    const dietData = [
      {
        id: "carnivorous",
        label: "carnivorous",
        value: Math.floor((diet.carnivorous * 100) / dinoData.length),
        color: "hsl(218,70%,50%)"
      },
      {
        id: "herbivorous",
        label: "herbivorous",
        value: Math.floor((diet.herbivorous / dinoData.length) * 100),
        color: "hsl(189, 70%, 50%)"
      },
      {
        id: "omnivorous",
        label: "omnivorous",
        value: Math.floor((diet.omnivorous / dinoData.length) * 100),
        color: "hsl(52, 70%, 50%)"
      }
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
      early_dinosaur: 0
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
        label: "prosauropod",
        value: type.prosauropod,
        color: "hsl(87, 70%, 50%)"
      },
      {
        id: "large theropod",
        label: "large theropod",
        value: type.large_theropod,
        color: "hsl(148, 70%, 50%)"
      },
      {
        id: "ceratopsian",
        label: "ceratopsian",
        value: type.ceratopsian,
        color: "hsl(254, 70%, 50%)"
      },
      { id: "sauropod", label: "sauropod", value: type.sauropod, color: "" },
      {
        id: "small theropod",
        label: "small theropod",
        value: type.small_theropod,
        color: "hsl(246, 70%, 50%)"
      },
      {
        id: "armoured dinosaur",
        label: "armoured dinosaur",
        value: type.armoured_dinosaur,
        color: "hsl(93, 70%, 50%)"
      },
      {
        id: "large ornithopod",
        label: "large ornithopod",
        value: type.large_ornithopod,
        color: "hsl(208, 70%, 50%)"
      },
      {
        id: "small ornithopod",
        label: "small ornithopod",
        value: type.small_ornithopod,
        color: "hsl(173, 70%, 50%)"
      },
      {
        id: "early dinosaur",
        label: "early dinosaur",
        value: type.early_dinosaur,
        color: "hsl(151, 70%, 50%)"
      }
    ];

    setTypeData(typeData);
  }, [dinoData]);

  return (
    <DinoDataContext.Provider
      value={{
        dinoData,
        loading,
<<<<<<< HEAD
        error
=======
        error,
        dietData,
        typeData
>>>>>>> 4bf8510 (Dynamic)
      }}
    >
      {children}
    </DinoDataContext.Provider>
  )
}
