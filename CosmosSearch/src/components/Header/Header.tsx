import { useContext } from "react";

import { FixedDiv, HeaderStyled } from "./HeaderStyled";
import { LinksHeader } from "./LinksHeader/LinksHeader";

import { BurgerMenu, CloseMenu, SmallLogo } from "../Svgs/Svg";

import { LinksContext } from "../../contexts/LinksContext/LinksContext";
import { SearchBar } from "../SearchBar/SearchBar";
import { PostContext } from "../../contexts/PostContext/PostContext";
import { UserContext } from "../../contexts/UserContext/UserContext";

interface iLinksHeader {
  path: "userLoggedInPerfil" | "userLogged" | "userDeslogged";
}

export const Header = ({ path }: iLinksHeader) => {
  const { burgerOpen, setBurgerOpen } = useContext(LinksContext);
  const { isDashboard } = useContext(PostContext);
  const { userState } = useContext(UserContext);

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
            {isDashboard ? (
              <div className="searchbar__inIcons">
                <SearchBar />
              </div>
            ) : (
              <></>
            )}
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
              userState === "userLogged" || userState === "userDeslogged" ? (
                <div className="links__start--header">
                  <LinksHeader path={path} />
                </div>
              ) : userState === "userLoggedInPerfil" 
              ?  <div className="links__start--header--logged">
                  <LinksHeader path={path} />
                 </div>
              : <></>
            ) : <></>}
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
