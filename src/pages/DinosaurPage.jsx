import React from "react";
import { useParams } from "react-router-dom";
import { DinoDataContext } from "../context/DinoDataContext";

export default function DinosaurPage() {
  const { dino } = useParams();

  // is this dinoData needed from useContext, or is the data needed passed through props? just putting it here for now in case...
  const { dinoData } = useContext(DinoDataContext);

  return <div>Dinosaur Page - {dino}</div>;
}
