import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DinoDataContext } from "../context/DinoDataContext";
import Location from "../components/Location/Location";

// dummy data - to change to dynamic
// const dummyDino =
//   {
//     "id": 1,
//     "name": "Aardonyx",
//     "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/aardonyx.jpg",
//     "typeOfDinosaur": "prosauropod",
//     "length": 8,
//     "weight": "N/A",
//     "diet": "herbivorous",
//     "whenLived": "Early Jurassic, 199-189 million years ago",
//     "foundIn": "South Africa, USA",
//     "taxonomy": "Dinosauria, Saurischia, Sauropodomorpha, Prosauropoda, Anchisauria",
//     "namedBy": "Yates, Bonnan, Neveling, Chinsamy and Blackbeard 2010 (2009)",
//     "typeSpecies": "celestae",
//     "description": "Aardonyx is known from 2 immature individuals. Adults would have been much larger, probably over 10m.Aardonyx would have been largely bipedal (walking on 2 legs) but also capable of walking on all 4 legs. This and its way of feeding are transitional features between those of basal sauropodomorphs and the more derived sauropods (large dinosaurs that walked on all fours) that came later."
//   }

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
