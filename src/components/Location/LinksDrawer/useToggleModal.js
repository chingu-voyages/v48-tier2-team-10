import { useState } from "react";

export default function useToggleModal() {
  const [isLinksDrawerOpen, setIsLinksDrawerOpen] = useState(false);
  const [country, setCountry] = useState();

  const toggleModal = (dino) => {
    setCountry(dino.position.country);
    setIsLinksDrawerOpen(true);
  };

  return {
    isLinksDrawerOpen,
    setIsLinksDrawerOpen,
    country,
    setCountry,
    toggleModal,
  };
}
