import { useContext, useState } from "react";

import { useForm } from "react-hook-form";

import { PlusX, PlusXRotate } from "../../../Svgs/Svg";
import { CommentLi } from "../CommentLi/CommentLi";
import {
  CommentsList,
  DivInput,
  NewCommentInput,
  NewCommentInputButton,
} from "../PostModalStyled";

import { INewComment } from "../../../../contexts/CommentsContext/@typesComments";
import { IPost } from "../../../../contexts/PostContext/@typesPost";

import { CommentsContext } from "../../../../contexts/CommentsContext/CommentsContext";
import { LinksContext } from "../../../../contexts/LinksContext/LinksContext";
import { PostContext } from "../../../../contexts/PostContext/PostContext";
import { CreateNewCommentForm } from "./CreateNewCommentForm";

export const CommentUl = () => {
  const [openCommentInput, setOpenCommentInput] = useState(false);
  const [commentButtonIsRotate, setCommentButtonIsRotate] = useState(false);
  
  const { allComments } = useContext(CommentsContext);

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
      {openCommentInput ? (
          <CreateNewCommentForm/>
      ) : (
        <></>
      )}
      {allComments.map((comment) => (
        <CommentLi
          key={comment.id}
          id={comment.id}
          name={comment.name}
          postId={comment.postId}
          userId={comment.id}
          text={comment.text}
        />
      ))}
    </CommentsList>
  );
};
