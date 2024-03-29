import { useState } from "react";

export default function useToggleModal() {
  const [isLinksModalOpen, setIsLinksModalOpen] = useState(false);
  const [country, setCountry] = useState();

  const toggleModal = (dino) => {
    setCountry(dino.position.country);
    setIsLinksModalOpen(true);
  };

  return {
    isLinksModalOpen,
    setIsLinksModalOpen,
    country,
    setCountry,
    toggleModal,
  };
}
