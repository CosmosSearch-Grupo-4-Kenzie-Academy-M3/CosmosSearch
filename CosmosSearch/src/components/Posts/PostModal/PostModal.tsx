import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { INewComment } from "../../../contexts/CommentsContext/@typesComments";
import { CommentsContext } from "../../../contexts/CommentsContext/CommentsContext";
import { LinksContext } from "../../../contexts/LinksContext/LinksContext";
import { IPost } from "../../../contexts/PostContext/@typesPost";
import { PostContext } from "../../../contexts/PostContext/PostContext";
import { CloseModal, PlusX, PlusXRotate } from "../../Svgs/Svg";
import { CommentLi } from "./CommentLi/CommentLi";
import {
  CommentsList,
  ContentDiv,
  HeaderModal,
  InfosDiv,
  CloseButton,
  PostModalDivStyled,
  PostModalStyled,
  NewCommentInput,
  NewCommentInputButton,
  DivInput,
} from "./PostModalStyled";

export const PostModal = () => {
  const [openCommentInput, setOpenCommentInput] = useState(false);
  const [commentButtonIsRotate, setCommentButtonIsRotate] = useState(false);

  const { setModalIsOpen, modalId } = useContext(LinksContext);
  const { posts } = useContext(PostContext);
  const { allComments, createNewComment } = useContext(CommentsContext);

  const userPost = posts.find((post) => post.id == modalId) as IPost;

  const { register, handleSubmit } = useForm<INewComment>();

  const submit = (data: INewComment) => {
    createNewComment(data, userPost.id.toString());
  };

  return (
    <PostModalDivStyled>
      <PostModalStyled>
        <CloseButton onClick={() => setModalIsOpen(false)}>
          <CloseModal />
        </CloseButton>
        <div className="header__modal--desktop">
          <HeaderModal>
            <p className="title__posts">{userPost.title}</p>
            <p className="title__posts">{userPost.name}</p>
          </HeaderModal>
        </div>
        <div className="header__modal--mobile">
          <HeaderModal>
            <p className="title__posts--mobile">{userPost.title}</p>
            <p className="title__posts--mobile">{userPost.name}</p>
          </HeaderModal>
        </div>
        <ContentDiv>
          <p className="post__text__preview--mobile">{userPost.body}</p>
        </ContentDiv>
        {/* <CommentUl /> */}
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
        <InfosDiv>
          <p className="post__infos--mobile">data: {userPost.date}</p>
          <p className="post__infos--mobile">topic: {userPost.topic}</p>
        </InfosDiv>
      </PostModalStyled>
    </PostModalDivStyled>
  );
};
