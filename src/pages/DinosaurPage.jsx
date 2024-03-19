import React from "react";
import { useParams } from "react-router-dom";

export default function DinosaurPage() {
  const { dino } = useParams();
  return <div>Dinosaur Page - {dino}</div>;
}
