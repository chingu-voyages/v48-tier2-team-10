import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DinoDataContext } from "../context/DinoDataContext";
import Location from "../components/Location/Location";

export default function DinosaurPage() {
  const { dino } = useParams();

  const { dinoData } = useContext(DinoDataContext);

  const thisDino = dinoData.find((dinosaur) => dinosaur.name === dino);

  return (
    <>
      <div>Dinosaur Page - {dino}</div>

      <Location dinoData={[thisDino]} />
    </>
  );
}
