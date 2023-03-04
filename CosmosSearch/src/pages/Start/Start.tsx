import { LinkButton } from "../../components/LinkButton/LinkButton";
import { Title } from "../../components/Title/Title";
import { StartStyled } from "./StartStyled";

import burgerMenu from "../../assets/svgs/burger_menu.svg";

import { useState } from "react";

export const Start = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <StartStyled>
      <div className="container__page--start">
        <div className="top__start">
          <Title/>
          <LinkButton text="Home" line={true} />
        </div>
        <div className="burger__div">
          {burgerOpen ? (
            <div className="links__start">
              <LinkButton text="Login" line={true} />
              <LinkButton text="Singup" />
            </div>
          ) : (
            <img src={burgerMenu} alt="Burger Menu Button" className="burger__menu" onClick={() => setBurgerOpen(true)}/>
          )}
        </div>
      </div>
    </StartStyled>
  );
};
