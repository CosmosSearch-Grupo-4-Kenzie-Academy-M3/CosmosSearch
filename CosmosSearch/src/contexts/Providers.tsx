import React from "react";
import { iChildren } from "./@childrenType";
import { LinksProvider } from "./LinksContext/LinksContext";
import { PostProvider } from "./PostContext/PostContext";
import { UserProvider } from "./UserContext/UserContext";

export const Providers = ({ children }: iChildren) => {
  return (
    <LinksProvider>
      <UserProvider>
        <PostProvider>{children}</PostProvider>
      </UserProvider>
    </LinksProvider>
  );
};
