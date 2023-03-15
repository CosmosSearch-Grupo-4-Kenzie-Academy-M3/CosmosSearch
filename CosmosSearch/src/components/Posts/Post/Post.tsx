import { useContext, useState } from "react";

import { toast } from "react-toastify";

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
import { ButtonStyled } from "../../Button/ButtonStyled";

import { CommentsContext } from "../../../contexts/CommentsContext/CommentsContext";
import { LinksContext } from "../../../contexts/LinksContext/LinksContext";
import { UserContext } from "../../../contexts/UserContext/UserContext";
import { PostContext } from "../../../contexts/PostContext/PostContext";


interface IPostProps {
  title: string;
  name: string;
  body: string;
  topic: string;
  postId: number;
  date: string;
  postLiked?: boolean;
}

export const Post = ({
  title,
  name,
  body,
  topic,
  postId,
  date,
  postLiked,
}: IPostProps) => {
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
                  <ButtonsStyled onClick={() => setHamburgerOpen(false)}>
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
                    <CloseXPost />
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
              <>
                <div onClick={() => likePost(postId)}>
                  {postLiked ? <LikeClicked /> : <LikeUnclicked />}
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
              </>
            ) : (
              <>
                <ButtonStyled
                  textColor="var(--primary-blue)"
                  borderColor="var(--primary-blue)"
                  onClick={() => {
                    toast("Login to view more.")
                  }}
                >
                  open
                </ButtonStyled>
              </>
            )}
          </div>
        </div>
      </div>
    </PostStyled>
  );
};
