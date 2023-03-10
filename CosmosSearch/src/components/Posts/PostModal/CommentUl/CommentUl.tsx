import React, { useContext, useState } from "react";

import { CommentsContext } from "../../../../contexts/CommentsContext/CommentsContext";
import { PlusComment } from "../../../Svgs/Svg";
import {
  CommentsList,
  DivInput,
  NewCommentInput,
  NewCommentInputButton,
} from "../PostModalStyled";

export const CommentUl = () => {
  const { allComments, readAllComments } = useContext(CommentsContext);
  const [openCommentInput, setOpenCommentInput] = useState(false);
  console.log(allComments);

  return (
    <CommentsList>
      <div className="comments__header">
        <p className="title__comments">Comments</p>
        <div
          className="plus__comment"
          onClick={() => setOpenCommentInput(!openCommentInput)}
        >
          <PlusComment />
        </div>
      </div>
      {openCommentInput ? (
        <DivInput>
          <NewCommentInput
            className="post__text__preview--mobile"
            type="text"
          />
          <NewCommentInputButton className="title__comments">
            ENVIAR
          </NewCommentInputButton>
        </DivInput>
      ) : (
        <></>
      )}
    </CommentsList>
  );
};
