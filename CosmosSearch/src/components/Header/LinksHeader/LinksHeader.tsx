import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext/UserContext";
import { LinkButton } from "../../LinkButton/LinkButton";
import { LinksHeaderStyled } from "./LinksHeaderStyled";

interface iLinksHeader {
  path: "userLoggedInPerfil" | "userLogged" | "userDeslogged";
}

export const LinksHeader = ({ path }: iLinksHeader) => {
  const { logout } = useContext(UserContext);

  switch (path) {
    case "userLoggedInPerfil":
      return (
        <LinksHeaderStyled>
          <div
            onClick={() =>
              localStorage.setItem(
                "@CosmosSearch:USERSTATE",
                "userLogged"
              )
            }
          >
            <LinkButton path="/dashboard" text="Home" />
          </div>
          <div className="colum"></div>
          <div onClick={() => logout()}>
            <LinkButton path="/" text="Logout" />
          </div>
        </LinksHeaderStyled>
      );
    case "userLogged":
      return (
        <LinksHeaderStyled>
          <div
            onClick={() =>
              localStorage.setItem(
                "@CosmosSearch:USERSTATE",
                "userLoggedInPerfil"
              )
            }
          >
            <LinkButton path="/userdashboard" text="Perfil" />
          </div>
          <div className="colum"></div>
          <div onClick={() => logout()}>
            <LinkButton path="/" text="Logout" />
          </div>
        </LinksHeaderStyled>
      );
    case "userDeslogged":
      return (
        <LinksHeaderStyled>
          <LinkButton path="/" text="Start" />
          <div className="colum"></div>
          <LinkButton path="/register" text="Sign Up" />
        </LinksHeaderStyled>
      );
  }
};
