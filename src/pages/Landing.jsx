import { useContext } from "react";
import { DinoDataContext } from "../context/DinoDataContext";
import Location from "../components/Location/Location";

export default function Landing() {
  const { dinoData, loading, error } = useContext(DinoDataContext);

  console.log(dinoData);

  if (loading) return <p>loading...</p>;

  if (error) return <p>cannot fetch dinosaurs</p>;

  return (
    <>
      <h1>landing</h1>
      <Location />
    </>
  );
}
