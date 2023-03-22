import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { INewComment } from "../../../../contexts/CommentsContext/@typesComments";

import { CommentsContext } from "../../../../contexts/CommentsContext/CommentsContext";
import { LinksContext } from "../../../../contexts/LinksContext/LinksContext";
import { IPost } from "../../../../contexts/PostContext/@typesPost";
import { PostContext } from "../../../../contexts/PostContext/PostContext";
import { PlusComment, PlusX, PlusXRotate } from "../../../Svgs/Svg";
import { CommentLi } from "../CommentLi/CommentLi";
import {
  CommentsList,
  DivInput,
  NewCommentInput,
  NewCommentInputButton,
} from "../PostModalStyled";

export const CommentUl = () => {
  const [openCommentInput, setOpenCommentInput] = useState(false);
  const [commentButtonIsRotate, setCommentButtonIsRotate] = useState(false);
  
  const {  modalId } = useContext(LinksContext);

  const { posts } = useContext(PostContext);

  const { allComments, createNewComment } = useContext(CommentsContext);

  const userPost = posts.find((post) => post.id == modalId) as IPost;

  const { register, handleSubmit } = useForm<INewComment>();

  const submit = (data: INewComment) => {
    createNewComment(data, userPost.id.toString());
  };

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
