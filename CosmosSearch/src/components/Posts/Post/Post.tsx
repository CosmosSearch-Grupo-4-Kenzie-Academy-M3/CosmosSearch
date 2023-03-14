import { useContext, useState } from "react";

import { PostContext } from "../../../contexts/PostContext/PostContext";

import {
  ArrowUp,
  CloseXPost,
  Hamburguer,
  LikeClicked,
  LikeUnclicked,
  Pencil,
  PlanetGrey,
} from "../../Svgs/Svg";
import {
  DivsButtonsStyled,
  PostStyled,
  ButtonsStyled,
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
  date: string;
  postLiked?: boolean;
  qntOfLikes?: number;
  likeId?: number
}

export const Post = ({
  title,
  name,
  body,
  topic,
  postId,
  date,
  postLiked,
  qntOfLikes,
  likeId,
}: IPostProps) => {
  const {
    setModalIsOpen,
    setModalId,
    setEditModalIsOpen,
    setDeleteModalIsOpen,
  } = useContext(LinksContext);
  const { setActualPostId, alterLikeCount } = useContext(PostContext);
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
                  <ButtonsStyled
                    onClick={() => {
                      setEditModalIsOpen(true);
                      setActualPostId(postId);
                    }}
                  >
                    <Pencil />
                  </ButtonsStyled>
                  <ButtonsStyled
                    onClick={() => {
                      setDeleteModalIsOpen(true);
                      setActualPostId(postId);
                    }}
                  >
                    <CloseXPost/>
                  </ButtonsStyled>
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
        <p className="post__text__preview">{body.slice(0, 220)}...</p>
        <div className="date__and__button">
          <div className="date">
            <p className="post__infos">date: {date}</p>
            <p className="post__infos">topic: {topic}</p>
          </div>
          <div className="button">
            {userState !== "userDeslogged" ? (
              <div onClick={() => {alterLikeCount(likeId as number, qntOfLikes as number, postId, postLiked as boolean)}}>
                <p className="input__placeholder">{qntOfLikes}</p>
                {postLiked ? <LikeClicked /> : <LikeUnclicked />}
              </div>
            ) : (
              <></>
            )}
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
