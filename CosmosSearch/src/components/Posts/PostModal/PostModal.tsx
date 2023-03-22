import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { INewComment } from "../../../contexts/CommentsContext/@typesComments";
import { CommentsContext } from "../../../contexts/CommentsContext/CommentsContext";
import { LinksContext } from "../../../contexts/LinksContext/LinksContext";
import { IPost } from "../../../contexts/PostContext/@typesPost";
import { PostContext } from "../../../contexts/PostContext/PostContext";
import { CloseModal, PlusX, PlusXRotate } from "../../Svgs/Svg";
import { CommentLi } from "./CommentLi/CommentLi";
import { CommentUl } from "./CommentUl/CommentUl";
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

  const { setAllComments, } = useContext(CommentsContext);

  const userPost = posts.find((post) => post.id == modalId) as IPost;

  return (
    <PostModalDivStyled>
      <PostModalStyled>
        <CloseButton onClick={() => {
          setModalIsOpen(false);
          setAllComments([]);
        }
      }>
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
        <CommentUl />
        <InfosDiv>
          <p className="post__infos--mobile">data: {userPost.date}</p>
          <p className="post__infos--mobile">topic: {userPost.topic}</p>
        </InfosDiv>
      </PostModalStyled>
    </PostModalDivStyled>
  );
};
