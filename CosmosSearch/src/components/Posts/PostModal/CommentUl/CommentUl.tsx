import { useContext, useState } from "react";

import { useForm } from "react-hook-form";

import { PlusX, PlusXRotate } from "../../../Svgs/Svg";
import { CommentLi } from "../CommentLi/CommentLi";
import { CommentsList } from "../PostModalStyled";

import { CommentsContext } from "../../../../contexts/CommentsContext/CommentsContext";

import { CreateNewCommentForm } from "./CreateNewCommentForm";

export const CommentUl = () => {
  const {
    allComments,
    openCommentInput,
    setOpenCommentInput,
    commentButtonIsRotate,
    setCommentButtonIsRotate,
  } = useContext(CommentsContext);

  return (
    <CommentsList>
      <div className="comments__header">
        <p className="title__comments">Comments</p>
        <div
          className="plus__comment"
          onClick={() => {
            setOpenCommentInput(!openCommentInput);
            setCommentButtonIsRotate(!commentButtonIsRotate);
          }}
        >
          {commentButtonIsRotate ? <PlusX /> : <PlusXRotate />}
        </div>
      </div>
      {openCommentInput ? <CreateNewCommentForm /> : <></>}
      {allComments.map((comment) => (
        <CommentLi
          key={comment.id}
          id={comment.id}
          name={comment.name}
          postId={comment.postId}
          userId={comment.userId}
          text={comment.text}
        />
      ))}
    </CommentsList>
  );
};
