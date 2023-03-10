import { useContext } from "react";

import { LinkButton } from "../../LinkButton/LinkButton";
import { LinksHeaderStyled } from "./LinksHeaderStyled";

import { UserContext } from "../../../contexts/UserContext/UserContext";

interface iLinksHeader {
  path: "userLoggedInPerfil" | "userLogged" | "userDeslogged";
}

export const LinksHeader = ({ path }: iLinksHeader) => {
  const { logout, setUserState } = useContext(UserContext);

  switch (path) {
    case "userLoggedInPerfil":
      return (
        <LinksHeaderStyled>
          <button
            onClick={() =>
              setUserState("userLogged")
            }
          >
            <LinkButton path="/dashboard" text="Home" />
          </button>
          <div className="colum"></div>
          <button onClick={() => logout()}>
            <LinkButton path="/" text="Logout" />
          </button>
        </LinksHeaderStyled>
      );
    case "userLogged":
      return (
        <LinksHeaderStyled>
          <button
            onClick={() =>
              setUserState("userLoggedInPerfil")
            }
          >
            <LinkButton path="/userdashboard" text="Perfil" />
          </button>
          <div className="colum"></div>
          <button onClick={() => logout()}>
            <LinkButton path="/" text="Logout" />
          </button>
        </LinksHeaderStyled>
      );
    case "userDeslogged":
      return (
        <LinksHeaderStyled>
          <LinkButton path="/login" text="Login" />
          <div className="colum"></div>
          <LinkButton path="/register" text="Sign Up" />
        </LinksHeaderStyled>
      );
  }
};
