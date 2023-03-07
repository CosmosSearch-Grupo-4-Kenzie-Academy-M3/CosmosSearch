import React from "react";
import { LinkButton } from "../../LinkButton/LinkButton";
import { LinksHeaderStyled } from "./LinksHeaderStyled";

interface iLinksHeader {
    path: "userLogged" | "userDeslogged" | "userLoggedInPerfil";
}

export const LinksHeader = ({path}: iLinksHeader) => {
    switch (path) {
        case "userLoggedInPerfil":
            return (
                <LinksHeaderStyled>
                  <LinkButton text="Home" />
                  <div className="colum"></div>
                  <LinkButton text="Logout" />
                </LinksHeaderStyled>
              );
        case "userLogged":
            return (
                <LinksHeaderStyled>
                  <LinkButton text="Perfil" />
                  <div className="colum"></div>
                  <LinkButton text="Logout" />
                </LinksHeaderStyled>
              );    
        case "userDeslogged":
            return (
                <LinksHeaderStyled>
                  <LinkButton text="Home" />
                  <div className="colum"></div>
                  <LinkButton text="Sign Up" />
                </LinksHeaderStyled>
              );      
    }

};
