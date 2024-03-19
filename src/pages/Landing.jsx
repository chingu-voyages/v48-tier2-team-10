import React, { useContext } from "react";
import { DinoDataContext } from "../context/DinoDataContext";

export default function Landing() {
  const { dinoData, loading, error } = useContext(DinoDataContext);

  console.log(dinoData);

  if (loading) return <p>loading...</p>;

  if (error) return <p>cannot fetch dinosaurs</p>;

  return <div>Landing</div>;
}
