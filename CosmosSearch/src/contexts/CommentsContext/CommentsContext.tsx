import { createContext, useState } from "react";

import { api } from "../../services/api";

import { iChildren } from "../@childrenType";
import { IAllComments, IComments } from "./@typesComments";

export const CommentsContext = createContext({} as IComments);

export const CommentsProvider = ({ children }: iChildren) => {
  const [allComments, setAllComments] = useState<IAllComments[]>([]);

  const readAllComments = async (postId: number) => {
    try {
      const token = localStorage.getItem("@CosmosSearch:TOKEN");
      const response = await api.get(`/posts/${postId}/comments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentsContext.Provider
      value={{ readAllComments, allComments, setAllComments }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
