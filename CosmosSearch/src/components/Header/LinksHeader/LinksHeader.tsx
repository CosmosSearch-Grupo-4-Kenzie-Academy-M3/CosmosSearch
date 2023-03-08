import React from "react";
import { LinkButton } from "../../LinkButton/LinkButton";
import { LinksHeaderStyled } from "./LinksHeaderStyled";

interface iLinksHeader {
  path: "userLogged" | "userDeslogged" | "userLoggedInPerfil";
}

export const LinksHeader = ({ path }: iLinksHeader) => {
  const teste = () => {
    console.log("deslogou");
  };

  switch (path) {
    case "userLoggedInPerfil":
      return (
        <LinksHeaderStyled>
          <LinkButton path="/" text="Home" />
          <div className="colum"></div>
          <LinkButton path="/" text="Logout" />
        </LinksHeaderStyled>
      );
    case "userLogged":
      return (
        <LinksHeaderStyled>
          <LinkButton path="/userdashboard" text="Perfil" />
          <div className="colum"></div>
          <LinkButton path="/" text="Logout" />
        </LinksHeaderStyled>
      );
    case "userDeslogged":
      return (
        <LinksHeaderStyled>
          <LinkButton path="/" text="Home" />
          <div className="colum"></div>
          <LinkButton path="/register" text="Sign Up" />
        </LinksHeaderStyled>
      );
  }
};
