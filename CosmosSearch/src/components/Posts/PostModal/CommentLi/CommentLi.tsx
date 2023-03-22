import { useContext, useState } from "react";

import { CommentDiv } from "../PostModalStyled";
import { EditCommentForm } from "./EditCommentForm";

import { IAllComments } from "../../../../contexts/CommentsContext/@typesComments";

import {
  ArrowRight,
  CloseXComments,
  PencilComments,
  ThreeDotsComments,
} from "../../../Svgs/Svg";
import { CommentsContext } from "../../../../contexts/CommentsContext/CommentsContext";

export const CommentLi = ({ name, text, postId, id, userId }: IAllComments) => {
  const [menueditCommentOpen, setMenuEditCommentOpen] = useState(false);
  const [editInputOpen, setEditInputOpen] = useState(false);

  const { deleteComment } = useContext(CommentsContext);

  return (
    <CommentDiv>
      {!editInputOpen ? (
        <p className="post__text__preview--mobile">
          <span className="title__comments">{name}: </span>
          {text}
        </p>
      ) : (
        <EditCommentForm id={id} setEditInputOpen={setEditInputOpen} setMenuEditCommentOpen={setMenuEditCommentOpen}/>
      )}

      {!menueditCommentOpen ? (
        <button onClick={() => setMenuEditCommentOpen(true)}>
          <ThreeDotsComments />
        </button>
      ) : (
        <div className="edit__menu">
          <button onClick={() => setEditInputOpen(true)}>
            <PencilComments />
          </button>
          <button onClick={() => deleteComment(id)}>
            <CloseXComments />
          </button>
          <button
            onClick={() => {
              setMenuEditCommentOpen(false);
              setEditInputOpen(false);
            }}
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </CommentDiv>
  );
};
