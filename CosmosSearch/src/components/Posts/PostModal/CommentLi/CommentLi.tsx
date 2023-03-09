import React, { useContext } from "react";
import { IAllComments } from "../../../../contexts/CommentsContext/@typesComments";
import { CommentsContext } from "../../../../contexts/CommentsContext/CommentsContext";
import { CommentDiv } from "../PostModalStyled";

export const CommentLi = ({ name, text, postId, id, userId }: IAllComments) => {
  return (
    <CommentDiv>
      <p className="post__text__preview--mobile">
        <span className="title__comments">{name}: </span>
        {text}
      </p>
    </CommentDiv>
  );
};
