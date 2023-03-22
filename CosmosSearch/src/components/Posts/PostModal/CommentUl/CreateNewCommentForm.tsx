import {  useContext } from "react";

import { useForm } from "react-hook-form";

import {
    DivInput,
    NewCommentInput,
    NewCommentInputButton,
} from "../PostModalStyled";


import { INewComment } from "../../../../contexts/CommentsContext/@typesComments";
import { IPost } from "../../../../contexts/PostContext/@typesPost";

import { CommentsContext } from "../../../../contexts/CommentsContext/CommentsContext";
import { LinksContext } from "../../../../contexts/LinksContext/LinksContext";
import { PostContext } from "../../../../contexts/PostContext/PostContext";

export const CreateNewCommentForm = () => {
  const { modalId } = useContext(LinksContext);

  const { posts } = useContext(PostContext);

  const { createNewComment } = useContext(CommentsContext);

  const userPost = posts.find((post) => post.id == modalId) as IPost;

  const { register, handleSubmit, reset } = useForm<INewComment>();

  const submit = (data: INewComment) => {
    createNewComment(data, userPost.id.toString());
    reset();
  };

  return (
    <DivInput>
      <form onSubmit={handleSubmit(submit)}>
        <NewCommentInput
          className="post__text__preview--mobile"
          type="text"
          {...register("text")}
        />
        <NewCommentInputButton className="title__comments">
          ENVIAR
        </NewCommentInputButton>
      </form>
    </DivInput>
  );
};
