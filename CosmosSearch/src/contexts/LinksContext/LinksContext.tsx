import { createContext, useState } from "react";

import { iChildren } from "../@childrenType";
import { iLinks } from "./@typesLinks";

export const LinksContext = createContext({} as iLinks);

export const LinksProvider = ({ children }: iChildren) => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalId, setModalId] = useState(0);
  const [mainComponent, setMainComponent] = useState("posts");

  return (
    <LinksContext.Provider
      value={{
        burgerOpen,
        setBurgerOpen,
        mainComponent,
        setMainComponent,
        modalIsOpen,
        setModalIsOpen,
        modalId,
        setModalId
      }}
    >
      {children}
    </LinksContext.Provider>
  );
};
