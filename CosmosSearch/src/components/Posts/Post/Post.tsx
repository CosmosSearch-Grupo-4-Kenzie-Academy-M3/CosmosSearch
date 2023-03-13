import { useContext, useEffect, useState } from "react";

import { PostContext } from "../../../contexts/PostContext/PostContext";

import {
  ArrowUp,
  CloseX,
  Hamburguer,
  Like,
  LikeClicked,
  LikeUnclicked,
  Pencil,
  PlanetGrey,
} from "../../Svgs/Svg";
import {
  DivsButtonsStyled,
  PostStyled,
  ButtonsStyled,
  ButtonsAbsoluteStyled,
} from "../PostListStyled";

import { CommentsContext } from "../../../contexts/CommentsContext/CommentsContext";
import { LinksContext } from "../../../contexts/LinksContext/LinksContext";

import { ButtonStyled } from "../../Button/ButtonStyled";
import { UserContext } from "../../../contexts/UserContext/UserContext";

interface IPostProps {
  title: string;
  name: string;
  body: string;
  topic: string;
  postId: number;
  date: string
  postLiked?: boolean
}

export const Post = ({ title, name, body, topic, postId, date, postLiked }: IPostProps) => {
  const {
    setModalIsOpen,
    setModalId,
    setEditModalIsOpen,
    setDeleteModalIsOpen,
  } = useContext(LinksContext);
  const { setActualPostId, likePost } = useContext(PostContext);
  const { readAllComments } = useContext(CommentsContext);
  const { userState } = useContext(UserContext);

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  
  return (
    <PostStyled>
      <div className="icon">
        <PlanetGrey />
      </div>
      <div className="post">
        <div className="post__header">
          <p className="title__posts title__posts--desktop">
            {title} - {name}
          </p>
          {userState === "userLoggedInPerfil" ? (
            <DivsButtonsStyled>
              {hamburgerOpen ? (
                <div className="buttons">
                  <ButtonsStyled  onClick={() => setHamburgerOpen(false)}>
                    <ArrowUp />
                  </ButtonsStyled>
                  <ButtonsAbsoluteStyled
                    top="2.3rem"
                    onClick={() => {
                      setEditModalIsOpen(true);
                      setActualPostId(postId);
                    }}
                  >
                    <Pencil />
                  </ButtonsAbsoluteStyled>
                  <ButtonsAbsoluteStyled
                  top="5.2rem"
                    onClick={() => {
                      setDeleteModalIsOpen(true);
                      setActualPostId(postId);
                    }}
                  >
                    <CloseX />
                  </ButtonsAbsoluteStyled>
                </div>
              ) : (
                <ButtonsStyled onClick={() => setHamburgerOpen(true)}>
                  <Hamburguer />
                </ButtonsStyled>
              )}
            </DivsButtonsStyled>
          ) : (
            <></>
          )}
        </div>
        <p className="post__text__preview">{body}</p>
        <div className="date__and__button">
          <div className="date">
            <p className="post__text__preview">date: {date}</p>
            <p className="post__text__preview">topic: {topic}</p>
          </div>
          <div
            className="button"
          >
            <div onClick={() => likePost(postId)}>
              {postLiked ? <LikeClicked/> : <LikeUnclicked/>} 
            </div>
            <ButtonStyled
              textColor="var(--primary-blue)"
              borderColor="var(--primary-blue)"
              onClick={() => {
                setModalIsOpen(true);
                setModalId(postId);
                readAllComments(postId);
              }}
            >
              open
            </ButtonStyled>
          </div>
        </div>
      </div>
    </PostStyled>
  );
};
