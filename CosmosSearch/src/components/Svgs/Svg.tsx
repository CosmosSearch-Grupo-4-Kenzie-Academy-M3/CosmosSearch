import burger from "../../assets/svgs/burger_menu.svg"
import close from "../../assets/svgs/close_menu.svg"
import planet from "../../assets/svgs/planet.svg"
import plus from "../../assets/svgs/plus+.svg"
import smallLogo from "../../assets/svgs/SmallMobileLogo.svg"
import astronaut from "../../assets/svgs/astronaut.svg"

import { SvgStyled } from "./SvgStyled"

export const BurgerMenu = () => {
  return <SvgStyled src={burger} alt="Burger Menu Button"/>;
};

export const CloseMenu = () => {
  return <SvgStyled src={close} alt="Close Menu Button"/>;
};

export const Planet = () => {
  return <SvgStyled src={planet} alt="Planet Icon"/>;
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