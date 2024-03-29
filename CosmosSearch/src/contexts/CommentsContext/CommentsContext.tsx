import { createContext, useState } from "react";

import { toast } from "react-toastify";

import { api } from "../../services/api";

import { iChildren } from "../@childrenType";
import { IUserInfos } from "../UserContext/@types_User";
import { IAllComments, IComments, INewComment } from "./@typesComments";

export const CommentsContext = createContext({} as IComments);

export const CommentsProvider = ({ children }: iChildren) => {
  const [allComments, setAllComments] = useState<IAllComments[]>([]);
  const [openCommentInput, setOpenCommentInput] = useState(false);
  const [commentButtonIsRotate, setCommentButtonIsRotate] = useState(false);
  const [commentWasEdited, setCommentWasEdited] = useState(false);

  const readAllComments = async (postId: number) => {
    try {
      const userInfos = JSON.parse(
        localStorage.getItem("@CosmosSearch:USERINFOS") as string
      ) as IUserInfos;
      const token = userInfos.token;
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
    const userInfos = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;
    const token = userInfos.token;
    const userId = userInfos.id;
    const name = userInfos.name;
    const newData = { ...data, postId, userId, name };
    try {
      const response = await api.post(`/comments`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllComments([...allComments, response.data]);
      toast.success("Comment created sucessifully!");
      setOpenCommentInput(false);
      setCommentButtonIsRotate(false);
    } catch (error) {
      console.log(error);
      toast.error("Some error !");
    }
  };

  const deleteComment = async (id: number) => {
    const userInfos = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;
    const token = userInfos.token;
    try {
      const response = await api.delete(`/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const allCommentsFiltered = allComments.filter(
        (comment) => comment.id !== id
      );
      setAllComments(allCommentsFiltered);
      toast.success("Comment deleted sucessifully");
    } catch (error) {
      console.log(error);
    }
  };

  const editComment = async (id: number, data: INewComment) => {
    const userInfos = JSON.parse(
      localStorage.getItem("@CosmosSearch:USERINFOS") as string
    ) as IUserInfos;
    const token = userInfos.token;
    try {
      const response = await api.patch(`comments/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newComment = response.data
      const filteredCommentList = allComments.filter((comment) => comment.id !== id)
      const newCommentList = [...filteredCommentList, newComment]
      setAllComments(newCommentList)
      setCommentWasEdited(true)
      toast.success("Comment edited!")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentsContext.Provider
      value={{
        readAllComments,
        allComments,
        setAllComments,
        createNewComment,
        deleteComment,
        commentButtonIsRotate,
        setCommentButtonIsRotate,
        openCommentInput,
        setOpenCommentInput,
        editComment,
        commentWasEdited,
        setCommentWasEdited
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
