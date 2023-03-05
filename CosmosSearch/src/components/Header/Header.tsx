import { useState } from "react";

import { SmallLogoStyled, TitleBordersStyled } from "../Title/TitleStyled";
import { HeaderStyled } from "./HeaderStyled";

import burgerMenu from "../../assets/svgs/burger_menu.svg";
import SmallLogo from "../../assets/svgs/SmallMobileLogo.svg";
import { LinkButton } from "../LinkButton/LinkButton";

export const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <HeaderStyled>
      <div className="container__header--mobileSmall">
        <SmallLogoStyled
          src={SmallLogo}
          alt="CosmosSeach Small Logo"
          className="small__logo--header"
        />
        {burgerOpen ? null : (
          <img
            src={burgerMenu}
            alt="Burger Menu Button"
            className="burger__menu"
            onClick={() => setBurgerOpen(true)}
          />
        )}
        {burgerOpen ? (
          <div className="links__start--header">
            <LinkButton text="Perfil" />
            <div className="colum"></div>
            <LinkButton text="Singup" />
          </div>
        ) : null}
        <TitleBordersStyled className="title__box--header">
          <p className="title__primary">CosmosSearch</p>
        </TitleBordersStyled>
      </div>
    </HeaderStyled>
  );
};
