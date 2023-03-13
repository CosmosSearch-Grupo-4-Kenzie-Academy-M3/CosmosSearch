import { useContext, useState } from "react";

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
  const { userState } = useContext(UserContext);

  const [animationClass, setAnimationClass] = useState<
    "links__header--in" | "links__header--out" | "non__animation"
  >("non__animation");

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
            {userState === "userLoggedInPerfil" ? (
              <div className="searchbar__inIcons--inperfil">
                <SearchBar />
              </div>
            ) : (
              <div className="searchbar__inIcons">
                <SearchBar />
              </div>
            )}
            {burgerOpen ? (
              <div
                className="close__menu"
                onClick={() => {
                  const timeToRenderAnimation = 1000;
                  setAnimationClass("links__header--out");
                  setTimeout(() => {
                    setBurgerOpen(false);
                  }, timeToRenderAnimation);
                }}
              >
                <CloseMenu />
              </div>
            ) : (
              <div
                className="burger__menu"
                onClick={() => {
                  setAnimationClass("links__header--in");
                  setBurgerOpen(true);
                }}
              >
                <BurgerMenu />
              </div>
            )}
            {burgerOpen ? (
              userState === "userLogged" || userState === "userDeslogged" ? (
                <div className="links__start--header">
                  <LinksHeader animationClass={animationClass} path={path} />
                </div>
              ) : userState === "userLoggedInPerfil" ? (
                <div className="links__start--header--logged">
                  <LinksHeader animationClass={animationClass} path={path} />
                </div>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </div>
          <div className="links__start--headerDesktop">
            <SearchBar />
            <LinksHeader animationClass="non__animation" path={path} />
          </div>
        </div>
      </div>
    </HeaderStyled>
    /* </FixedDiv> */
  );
};
