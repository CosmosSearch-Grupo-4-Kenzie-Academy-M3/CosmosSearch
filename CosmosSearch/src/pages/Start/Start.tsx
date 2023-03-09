import { useContext, useEffect } from "react";

import { LinkButton } from "../../components/LinkButton/LinkButton";
import { Title } from "../../components/Title/Title";
import { StartStyled } from "./StartStyled";

import { TitleBordersStyled } from "../../components/Title/TitleStyled";
import { LinksContext } from "../../contexts/LinksContext/LinksContext";
import { BurgerMenu } from "../../components/Svgs/Svg";
import { CommentsContext } from "../../contexts/CommentsContext/CommentsContext";

export const Start = () => {
  const { burgerOpen, setBurgerOpen } = useContext(LinksContext);
  const {readAllComments} = useContext(CommentsContext)
  
  useEffect(()=>{
    readAllComments(1)
  }, [])

  return (
    <StartStyled>
      <div className="container__page--start">
        {/* Mobile */}
        <div className="top__start">
          <Title />
          <div
            onClick={() =>
              localStorage.setItem("@CosmosSearch:USERSTATE", "userDeslogged")
            }
          >
            <LinkButton path="/dashboard" text="Home" line={true} />
          </div>
          <div className="burger__div">
            {burgerOpen ? (
              <div className="links__start">
                <LinkButton path="/login" text="Login" line={true} />
                <LinkButton path="/register" text="Singup" />
              </div>
            ) : (
              <div className="burger__menu" onClick={() => setBurgerOpen(true)}>
                <BurgerMenu />
              </div>
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
          <div
            onClick={() =>
              localStorage.setItem("@CosmosSearch:USERSTATE", "userDeslogged")
            }
          >
            <LinkButton path="/dashboard" text="Home" line={true} />
          </div>
          <div className="links__start">
            <LinkButton path="/login" text="Login" line={true} />
            <LinkButton path="/register" text="Sign Up" />
          </div>
        </div>
      </div>
    </StartStyled>
  );
};
