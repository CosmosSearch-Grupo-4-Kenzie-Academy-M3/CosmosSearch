import React from "react";
import { iChildren } from "./@childrenType";
import { CommentsProvider } from "./CommentsContext/CommentsContext";
import { LinksProvider } from "./LinksContext/LinksContext";
import { PostProvider } from "./PostContext/PostContext";
import { UserProvider } from "./UserContext/UserContext";

export const Providers = ({ children }: iChildren) => {
  return (
    <LinksProvider>
      <UserProvider>
        <PostProvider>
          <CommentsProvider>{children}</CommentsProvider>
        </PostProvider>
      </UserProvider>
    </LinksProvider>
  );
};
