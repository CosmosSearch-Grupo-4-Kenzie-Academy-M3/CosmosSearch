import { useState } from "react";

import { SmallLogoStyled, TitleBordersStyled } from "../Title/TitleStyled";
import { HeaderStyled } from "./HeaderStyled";

import burgerMenu from "../../assets/svgs/burger_menu.svg";
import closeMenu from "../../assets/svgs/close_menu.svg";
import SmallLogo from "../../assets/svgs/SmallMobileLogo.svg";

import { LinksHeader } from "./LinksHeader/LinksHeader";

interface iLinksHeader {
  path: "userLogged" | "userDeslogged" | "userLoggedInPerfil";
}

export const Header = ({path}: iLinksHeader) => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <HeaderStyled>
      <div className="container__header--mobileSmall">
        <SmallLogoStyled
          src={SmallLogo}
          alt="CosmosSeach Small Logo"
          className="small__logo--header"
        />
        <p className="title__box--header title__primary">CosmosSearch</p>
        <div className="icons">
          {burgerOpen ? (
            <img
              src={closeMenu}
              alt="Close Menu Button"
              className="close__menu"
              onClick={() => setBurgerOpen(false)}
            />
          ) : (
            <img
              src={burgerMenu}
              alt="Burger Menu Button"
              className="burger__menu"
              onClick={() => setBurgerOpen(true)}
            />
          )}
          {burgerOpen ? (
            <div className="links__start--header">
                <LinksHeader path={path}/> 
            </div>
          ) : null}
        </div>
        <div className="links__start--headerDesktop">
            <LinksHeader path={path}/> 
        </div>
      </div>
    </HeaderStyled>
  );
};
