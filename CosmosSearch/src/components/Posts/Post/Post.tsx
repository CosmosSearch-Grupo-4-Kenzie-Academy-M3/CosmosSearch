import { useContext } from "react";
import { LinksContext } from "../../../contexts/LinksContext/LinksContext";
import { PostContext } from "../../../contexts/PostContext/PostContext";
import { ButtonStyled } from "../../Button/ButtonStyled";
import { PlanetGrey, SpaceInvaders } from "../../Svgs/Svg";
import { CloseModal } from "../../Svgs/Svg";
import { CloseButtonStyled, PostStyled } from "../PostListStyled";

interface IPostProps {
  title: string;
  name: string;
  body: string;
  topic: string;
  postId: number;
}

export const Post = ({title, name, body, topic, postId}: IPostProps) => {
  const { setModalIsOpen } = useContext(LinksContext);
  const { deletePost } = useContext(PostContext)

  const deletePosts = () => {
    deletePost(postId)
  }

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
          <CloseButtonStyled onClick={deletePosts}>
            <CloseModal />
          </CloseButtonStyled>
        </div>
        <p className="post__text__preview">
          {body}
        </p>
        <div className="date__and__button">
          <div className="date">
            <p className="post__text__preview">date: xx/xx/xx</p>
            <p className="post__text__preview">topic: {topic}</p>
          </div>
          <div className="button" onClick={() => setModalIsOpen(true)}>
            <SpaceInvaders />
            <div id={postId.toString()}>    
              <ButtonStyled      
                textColor="var(--primary-blue)"
                borderColor="var(--primary-blue)"
                
              >
                open
              </ButtonStyled>
            </div>
          </div>
        </div>
      </div>
    </PostStyled>
  );
};
