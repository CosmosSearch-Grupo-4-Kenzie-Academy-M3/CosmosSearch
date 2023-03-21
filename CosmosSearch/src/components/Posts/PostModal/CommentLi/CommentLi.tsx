import { CommentDiv } from "../PostModalStyled";

import { IAllComments } from "../../../../contexts/CommentsContext/@typesComments";
import {
  ArrowRight,
  ArrowUp,
  CloseXComments,
  CloseXLitle,
  CloseXPost,
  Pencil,
  PencilComments,
  ThreeDotsComments,
} from "../../../Svgs/Svg";
import { useState } from "react";
import { set } from "react-hook-form/dist/utils";

export const CommentLi = ({ name, text, postId, id, userId }: IAllComments) => {
  const [editCommentOpen, setEditCommentOpen] = useState(false);

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
          <button>
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
