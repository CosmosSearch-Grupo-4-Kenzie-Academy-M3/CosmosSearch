import { useContext, useEffect, useState } from "react";
import { CommentsContext } from "../../../contexts/CommentsContext/CommentsContext";
import { LinksContext } from "../../../contexts/LinksContext/LinksContext";
import { IPost } from "../../../contexts/PostContext/@typesPost";
import { PostContext } from "../../../contexts/PostContext/PostContext";
import { CloseModal, PlusComment } from "../../Svgs/Svg";
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
  const { setModalIsOpen, modalId } = useContext(LinksContext);
  const {posts} = useContext(PostContext);
  const { allComments } = useContext(CommentsContext);
  const [openCommentInput, setOpenCommentInput] = useState(false);

    const userPost = posts.find(post => post.id == modalId) as IPost


  return (
    <PostModalDivStyled>
      <PostModalStyled>
        <CloseButton onClick={() => setModalIsOpen(false)}>
          <CloseModal />
        </CloseButton>
        <HeaderModal>
          <p className="title__posts">{userPost.title}</p>
          <p className="title__posts">{userPost.name}</p>
        </HeaderModal>
        <ContentDiv>
          <p className="post__text__preview--mobile">
            {userPost.body}
          </p>
        </ContentDiv>
        {/* <CommentUl /> */}
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
          <p className="post__text__preview--mobile">data: xx/xx/xx</p>
          <p className="post__text__preview--mobile">topic: {userPost.topic}</p>
        </InfosDiv>
      </PostModalStyled>
    </PostModalDivStyled>
  );
};
