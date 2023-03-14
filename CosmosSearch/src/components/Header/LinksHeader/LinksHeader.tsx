import { useContext } from "react";

import { LinkButton } from "../../LinkButton/LinkButton";
import { LinksHeaderStyled } from "./LinksHeaderStyled";

import { UserContext } from "../../../contexts/UserContext/UserContext";

interface iLinksHeader {
  path: "userLoggedInPerfil" | "userLogged" | "userDeslogged";
  animationClass?: string;
}

export const LinksHeader = ({ path, animationClass }: iLinksHeader) => {
  const { logout, setUserState } = useContext(UserContext);

  switch (path) {
    case "userLoggedInPerfil":
      return (
        <LinksHeaderStyled>
          <div className={animationClass}>
            <button onClick={() => setUserState("userLogged")}>
              <LinkButton path="/dashboard" text="Home" />
            </button>
            <div className="colum"></div>
            <button onClick={() => logout()}>
              <LinkButton path="/" text="Logout" />
            </button>
          </div>
        </LinksHeaderStyled>
      );
    case "userLogged":
      return (
        <LinksHeaderStyled>
          <div className={animationClass}>
            <button onClick={() => setUserState("userLoggedInPerfil")}>
              <LinkButton path="/userdashboard" text="Perfil" />
            </button>
            <div className="colum"></div>
            <button onClick={() => logout()}>
              <LinkButton path="/" text="Logout" />
            </button>
          </div>
        </LinksHeaderStyled>
      );
    case "userDeslogged":
      return (
        <LinksHeaderStyled>
          <div className={animationClass}>
            <LinkButton path="/login" text="Login" />
            <div className="colum"></div>
            <LinkButton path="/register" text="Sign Up" />
          </div>
        </LinksHeaderStyled>
      );
  }
};
