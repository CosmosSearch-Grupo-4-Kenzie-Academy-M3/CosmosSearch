import { useContext, useState } from "react";

import { CommentDiv } from "../PostModalStyled";

import { IAllComments } from "../../../../contexts/CommentsContext/@typesComments";
import {
  ArrowRight,
  CloseXComments,
  PencilComments,
  ThreeDotsComments,
} from "../../../Svgs/Svg";
import { CommentsContext } from "../../../../contexts/CommentsContext/CommentsContext";

export const CommentLi = ({ name, text, postId, id, userId }: IAllComments) => {
  const [editCommentOpen, setEditCommentOpen] = useState(false);

  const { deleteComment } = useContext(CommentsContext)

  return (
    <CommentDiv>
      <p className="post__text__preview--mobile">
        <span className="title__comments">{name}: </span>
        {text}
      </p>
      {!editCommentOpen ? (
        <button onClick={() => setEditCommentOpen(true)}>
          <ThreeDotsComments />
        </button>
      ) : (
        <div className="edit__menu">
          <button>
            <PencilComments />
          </button>
          <button onClick={() => deleteComment(id)}>
            <CloseXComments />
          </button>
          <button onClick={() => setEditCommentOpen(false)}>
            <ArrowRight />
          </button>
        </div>
      )}
    </CommentDiv>
  );
};
