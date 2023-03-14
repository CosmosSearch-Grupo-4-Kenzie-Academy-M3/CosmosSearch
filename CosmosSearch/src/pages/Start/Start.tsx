import { useContext } from "react";

import { LinkButton } from "../../components/LinkButton/LinkButton";
import { Title } from "../../components/Title/Title";
import { StartStyled } from "./StartStyled";
import { TitleBordersStyled } from "../../components/Title/TitleStyled";
import { BurgerMenu } from "../../components/Svgs/Svg";

import { LinksContext } from "../../contexts/LinksContext/LinksContext";

export const Start = () => {
  const { burgerOpen, setBurgerOpen } = useContext(LinksContext);

  return (
    <StartStyled>
      <div className="container__page--start">
        {/* Mobile */}
        <div className="top__start">
          <Title />
          <button className="links__hover" onClick={() => localStorage.setItem("@CosmosSearch:USERSTATE", "userDeslogged")}>
            <LinkButton path="/dashboard" text="Home" line={true} />
          </button>
          <div className="burger__div">
            {burgerOpen ? (
              <div className="links__start">
                <LinkButton path="/login" text="Login" line={true} />
                <LinkButton path="/register" text="Singup" />
              </div>
            ) : (
              <button
                className="burger__menu"
                onClick={() => setBurgerOpen(true)}
              >
                <BurgerMenu />
              </button>
            )}
          </div>
        </div>
        {/* Desktop */}
        <div className="top__start--desktop">
          <TitleBordersStyled marginTop="10.1875rem" className="title__box">
            <p className="title__primary">CosmosSearch</p>
          </TitleBordersStyled>
        </div>
        <div className="links__start--desktop">
          <button className="links__hover" onClick={() => localStorage.setItem("@CosmosSearch:USERSTATE", "userDeslogged")}>
            <LinkButton path="/dashboard" text="Home" line={true} />
          </button>
          <div className="links__start">
            <LinkButton path="/login" text="Login" line={true} />
            <LinkButton path="/register" text="Sign Up" />
          </div>
        </div>
      </div>
    </StartStyled>
  );
};
