import { useContext } from "react";

import { FixedDiv, HeaderStyled } from "./HeaderStyled";
import { LinksHeader } from "./LinksHeader/LinksHeader";

import { BurgerMenu, CloseMenu, SmallLogo } from "../Svgs/Svg";

import { LinksContext } from "../../contexts/LinksContext/LinksContext";
import { SearchBar } from "../SearchBar/SearchBar";
import { PostContext } from "../../contexts/PostContext/PostContext";

interface iLinksHeader {
  path: "userLoggedInPerfil" | "userLogged" | "userDeslogged";
}

export const Header = ({ path }: iLinksHeader) => {
  const { burgerOpen, setBurgerOpen } = useContext(LinksContext);
  const { isDashboard } = useContext(PostContext);

  return (
    // <FixedDiv>
    <HeaderStyled>
      <div className="header__container">
        <div className="container__header--mobileSmall">
          <div className="small__logo--header">
            <SmallLogo />
          </div>
          <p className="title__box--header title__primary">CosmosSearch</p>
          <div className="icons">
            {burgerOpen ? (
              <div className="close__menu" onClick={() => setBurgerOpen(false)}>
                <CloseMenu />
              </div>
            ) : (
              <div className="burger__menu" onClick={() => setBurgerOpen(true)}>
                <BurgerMenu />
              </div>
            )}
            {burgerOpen ? (
              <div className="links__start--header">
                {/* {isDashboard ? <SearchBar /> : <></>} */}
                <LinksHeader path={path} />
              </div>
            ) : null}
          </div>
          <div className="links__start--headerDesktop">
            {isDashboard ? <SearchBar /> : <></>}
            <LinksHeader path={path} />
          </div>
        </div>
      </div>
    </HeaderStyled>
    /* </FixedDiv> */
  );
};
