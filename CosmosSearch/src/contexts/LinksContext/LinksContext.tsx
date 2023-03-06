import { createContext, useState } from "react";

import { iChildren } from "../@childrenType";
import { iLinks } from "./@typesLinks";

export const LinksContext = createContext({} as iLinks);

export const LinksProvider = ({ children }: iChildren) => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <LinksContext.Provider value={{ burgerOpen, setBurgerOpen }}>
      {children}
    </LinksContext.Provider>
  );
};
