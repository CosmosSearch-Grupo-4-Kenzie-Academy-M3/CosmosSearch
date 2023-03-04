import { LinkButton } from "../../components/LinkButton/LinkButton";
import { Title } from "../../components/Title/Title";
import { StartStyled } from "./StartStyled";

import burgerMenu from "../../assets/svgs/burger_menu.svg";

import { useState } from "react";
import { TitleBordersStyled } from "../../components/Title/TitleStyled";

export const Start = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <StartStyled>
      <div className="container__page--start">
        {/* Mobile */}
        <div className="top__start">
          <Title />
          <LinkButton text="Home" line={true} />
        </div>
        <div className="burger__div">
          {burgerOpen ? (
            <div className="links__start">
              <LinkButton text="Login" line={true} />
              <LinkButton text="Singup" />
            </div>
          ) : (
            <img
              src={burgerMenu}
              alt="Burger Menu Button"
              className="burger__menu"
              onClick={() => setBurgerOpen(true)}
            />
          )}
        </div>
        {/* Desktop */}
        <div className="top__start--desktop">
          <TitleBordersStyled marginTop="210px" className="title__box">
            <p className="title__primary">CosmosSearch</p>
          </TitleBordersStyled>
        </div>
        <div className="links__start--desktop">
          <LinkButton text="Home" line={true} />
          <div className="links__start">
            <LinkButton text="Login" line={true} />
            <LinkButton text="Singup" />
          </div>
        </div>
      </div>
    </StartStyled>
  );
};
