import React from "react";
import { iChildren } from "./@childrenType";
import { LinksProvider } from "./LinksContext/LinksContext";
import { UserProvider } from "./UserContext/UserContext";

export const Providers = ({ children }: iChildren) => {
  return (
    <LinksProvider>
      <UserProvider>{children}</UserProvider>
    </LinksProvider>
  );
};
