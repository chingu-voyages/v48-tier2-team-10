import { useParams } from "react-router-dom";
import { DinoDataContext } from "../context/DinoDataContext";
import DinoDetails from "../components/DinoDetails/DinoDetails";
import { useContext } from "react";
import Location from "../components/Location/Location";

export default function DinosaurPage() {
  const { dino } = useParams();

  const { dinoData } = useContext(DinoDataContext);

  const thisDino = dinoData.find((dinosaur) => dinosaur.name === dino);

  return (
    <>
      <DinoDetails />
      <Location dinoData={[thisDino]} />
    </>
  );
}
