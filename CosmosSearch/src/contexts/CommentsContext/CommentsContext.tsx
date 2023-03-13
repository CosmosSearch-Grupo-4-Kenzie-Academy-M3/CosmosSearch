import { createContext, useState } from "react";

import { toast } from "react-toastify";

import { api } from "../../services/api";

import { iChildren } from "../@childrenType";
import { IAllComments, IComments, INewComment } from "./@typesComments";

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

  const createNewComment = async (data: INewComment, postId: string) => {
    const token = localStorage.getItem("@CosmosSearch:TOKEN");
    const userId = localStorage.getItem("@CosmosSearch:USERID");
    const name = localStorage.getItem("@CosmosSearch:USERNAME");
    const newData = { ...data, postId, userId, name };
    try {
      const response = await api.post(`/posts/${postId}/comments`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllComments([...allComments, response.data]);
      toast.success("Comentário postado com sucesso!");
      console.log(newData);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível enviar o comentário!");
    }
  };

  return (
    <CommentsContext.Provider
      value={{ readAllComments, allComments, setAllComments, createNewComment }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
