import burger from "../../assets/svgs/burger_menu.svg"
import close from "../../assets/svgs/close_menu.svg"
import planet from "../../assets/svgs/planet.svg"
import planetGrey from "../../assets/svgs/planet_grey.svg"
import plus from "../../assets/svgs/plus+.svg"
import smallLogo from "../../assets/svgs/SmallMobileLogo.svg"
import astronaut from "../../assets/svgs/astronaut.svg"
import closeModal from "../../assets/svgs/close__modal--teste.svg"
import spaceInvaders from "../../assets/svgs/space_invaders.svg"
import plusComment from "../../assets/svgs/plus__comment.svg"

import { SvgCloseModal, SvgStyled } from "./SvgStyled"

export const BurgerMenu = () => {
  return <SvgStyled src={burger} alt="Burger Menu Button"/>;
};

export const CloseMenu = () => {
  return <SvgStyled src={close} alt="Close Menu Button"/>;
};

export const Planet = () => {
  return <SvgStyled src={planet} alt="Planet Icon"/>;
};

export const PlanetGrey = () => {
  return <SvgStyled src={planetGrey} alt="Planet Icon"/>;
};

export const Plus = () => {
  return <SvgStyled src={plus} alt="Plus icon"/>;
};

export const SmallLogo = () => {
  return <SvgStyled src={smallLogo} alt="CosmosSearch small logo"/>;
};

export const Astronaut = () => {
  return <SvgStyled src={astronaut} alt="Astronaut icon"/>;
};

export const SpaceInvaders = () => {
  return <SvgCloseModal src={spaceInvaders} alt="Astronaut icon"/>;
}

export const CloseModal = () => {
  return <SvgCloseModal src={closeModal} alt="Close icon"/>;
}

export const PlusComment = () => {
  return <SvgStyled src={plusComment} alt="Close icon"/>;  
}