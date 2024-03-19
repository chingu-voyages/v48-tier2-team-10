import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DinoDataContext = createContext();

export function DinoDataContextProvider({ children }) {
  const [dinoData, setDinoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(false);
      setError(false);
      try {
        const { data } = await axios.get(
          "https://chinguapi.onrender.com/dinosaurs"
        );
        setLoading(true);
        setDinoData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
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
