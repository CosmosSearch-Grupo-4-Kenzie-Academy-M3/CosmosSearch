import burger from "../../assets/svgs/burger_menu.svg";
import close from "../../assets/svgs/close_menu.svg";
import planet from "../../assets/svgs/planet.svg";
import planetGrey from "../../assets/svgs/planet_grey.svg";
import plus from "../../assets/svgs/plus+.svg";
import smallLogo from "../../assets/svgs/SmallMobileLogo.svg";
import astronaut from "../../assets/svgs/astronaut.svg";
import closeModal from "../../assets/svgs/close__modal--teste.svg";
import spaceInvaders from "../../assets/svgs/space_invaders.svg";
import plusComment from "../../assets/svgs/plus__comment.svg";
import hamburguer from "../../assets/svgs/hamburger.svg";
import closeX from "../../assets/svgs/close_x.svg";
import pencil from "../../assets/svgs/pencil.svg";
import arrowUp from "../../assets/svgs/arrow_up.svg";
import likeUnclicked from "../../assets/svgs/like_unclicked.svg";
import likeClicked from "../../assets/svgs/like_clicked.svg";
import searchIcon from "../../assets/svgs/search-icon.svg";

import {
  SvgCloseModal,
  SvgLike,
  SvgPlusComment,
  SvgSearch,
  SvgStyled,
  SvgStyledFliped,
} from "./SvgStyled";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext/PostContext";

export const BurgerMenu = () => {
  return <SvgStyled src={burger} alt="Burger Menu Button" />;
};

export const CloseMenu = () => {
  return <SvgStyled src={close} alt="Close Menu Button" />;
};

export const Planet = () => {
  return <SvgStyled src={planet} alt="Planet Icon" />;
};

export const PlanetGrey = () => {
  return <SvgStyled src={planetGrey} alt="Planet Icon" />;
};

export const Plus = () => {
  return <SvgStyled src={plus} alt="Plus icon" />;
};

export const SmallLogo = () => {
  return <SvgStyled src={smallLogo} alt="CosmosSearch small logo" />;
};

export const Astronaut = () => {
  return <SvgStyled src={astronaut} alt="Astronaut icon" />;
};

export const SpaceInvaders = () => {
  return <SvgCloseModal src={spaceInvaders} alt="Space invaders icon" />;
};

export const LikeUnclicked = () => {
  const { setLikeClicked } = useContext(PostContext);

  return (
    <SvgLike
      src={likeUnclicked}
      alt="Like unclicked icon"
      // onClick={() => setLikeClicked(true)}
    />
  );
};

export const LikeClicked = () => {
  const { setLikeClicked } = useContext(PostContext);

  return (
    <SvgLike
      src={likeClicked}
      alt="Like clicked icon"
      // onClick={() => setLikeClicked(false)}
    />
  );
};

export const Like = () => {
  const { likeClicked } = useContext(PostContext);
  return <>{likeClicked ? <LikeClicked /> : <LikeUnclicked />}</>;
};

export const CloseModal = () => {
  return <SvgCloseModal src={closeModal} alt="Close modal icon" />;
};

export const PlusComment = () => {
  return <SvgPlusComment src={plusComment} alt="Plus Comment icon" />;
};

export const Hamburguer = () => {
  return <SvgStyled src={hamburguer} alt="Hamburguer icon" />;
};

export const CloseX = () => {
  return <SvgStyled src={closeX} alt="CloseX icon" />;
};

export const PlusXRotate = () => {
  return <SvgStyledFliped src={closeX} alt="PlusX rotate icon" />;
};

export const PlusX = () => {
  return <SvgPlusComment src={closeX} alt="PlusX icon" />;
};

export const Pencil = () => {
  return <SvgStyled src={pencil} alt="Pencil icon" />;
};

export const ArrowUp = () => {
  return <SvgStyled src={arrowUp} alt="Arrow up icon" />;
};

export const SearchIcon = () => {
  return <SvgSearch src={searchIcon} alt="Search icon" />;
};
