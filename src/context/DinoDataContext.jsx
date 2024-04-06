import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DinoDataContext = createContext();

export function DinoDataContextProvider({ children }) {
  const [dinoData, setDinoData] = useState([]);
  const [loading, setLoading] = useState(false);
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

  return (
    <DinoDataContext.Provider
      value={{
        dinoData,
        loading,
        error,
      }}
    >
      {children}
    </DinoDataContext.Provider>
  );
}
