import React, { useContext } from "react";
import { DinoDataContext } from "../context/DinoDataContext";

export default function SearchPage() {
  const { dinoData } = useContext(DinoDataContext);

  console.log(dinoData);
  return <div>Search Page</div>;
}
