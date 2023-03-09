import { useContext } from "react";
import { LinksContext } from "../../../contexts/LinksContext/LinksContext";
import { ButtonStyled } from "../../Button/ButtonStyled";
import { PlanetGrey } from "../../Svgs/Svg";
import { PostStyled } from "../PostListStyled";

export const Post = () => {
  const { setModalIsOpen } = useContext(LinksContext);

  return (
    <PostStyled>
      <div className="icon">
        <PlanetGrey />
      </div>
      <div className="post">
        <p className="title__posts title__posts--desktop">Post Title - User</p>
        <p className="post__text__preview">
          post content preview, if wanna see more click on the button to open
          modal
        </p>
        <div className="date__and__button">
          <div className="date">
            <p className="post__text__preview">date: xx/xx/xx</p>
            <p className="post__text__preview">topic: phisycs</p>
          </div>
          <div className="button" onClick={() => setModalIsOpen(true)}>
            <PlanetGrey />
            <ButtonStyled
              textColor="var(--primary-blue)"
              borderColor="var(--primary-blue)"
            >
              open
            </ButtonStyled>
          </div>
        </div>
      </div>
    </PostStyled>
  );
};
