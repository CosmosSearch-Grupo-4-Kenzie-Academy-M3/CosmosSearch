import { useContext } from "react";

import { HeaderStyled } from "./HeaderStyled";

import { LinksHeader } from "./LinksHeader/LinksHeader";
import { BurgerMenu, CloseMenu, SmallLogo } from "../Svgs/Svg";
import { LinksContext } from "../../contexts/LinksContext/LinksContext";

interface iLinksHeader {
  path: "userLogged" | "userDeslogged" | "userLoggedInPerfil";
}

export const Header = ({ path }: iLinksHeader) => {
  const {burgerOpen, setBurgerOpen} = useContext(LinksContext);
  console.log(burgerOpen)

  return (
    <HeaderStyled>
      <div className="container__header--mobileSmall">
        <div className="small__logo--header">
          <SmallLogo />
        </div>
        <p className="title__box--header title__primary">CosmosSearch</p>
        <div className="icons">
          {burgerOpen ? (
            <div className="close__menu" onClick={() => setBurgerOpen(false)}>
              <CloseMenu/>
            </div>
          ) : (
            <div className="burger__menu" onClick={() => setBurgerOpen(true)}>
              <BurgerMenu />
            </div>
          )}
          {burgerOpen ? (
            <div className="links__start--header">
              <LinksHeader path={path} />
            </div>
          ) : null}
        </div>
        <div className="links__start--headerDesktop">
          <LinksHeader path={path} />
        </div>
      </div>
    </HeaderStyled>
  );
};
