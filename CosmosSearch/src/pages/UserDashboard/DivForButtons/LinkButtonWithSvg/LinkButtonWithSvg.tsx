import { useContext } from "react";

import { LinkButton } from "../../../../components/LinkButton/LinkButton";
import { Astronaut, Planet, Plus } from "../../../../components/Svgs/Svg";
import { LinkButtonWithSvgStyled } from "./LinkButtonWithSvgStyled";

import { LinksContext } from "../../../../contexts/LinksContext/LinksContext";
import { UserContext } from "../../../../contexts/UserContext/UserContext";

interface iLinkButtonWithSvg {
  icon: "astronaut" | "planet" | "plus";
}

export const LinkButtonWithSvg = ({ icon }: iLinkButtonWithSvg) => {
  const { setMainComponent } = useContext(LinksContext);
  
  const { setUserState } = useContext(UserContext);

  switch (icon) {
    case "astronaut":
      return (
        <LinkButtonWithSvgStyled
          onClick={() => {
            setMainComponent("updatePerfil");
            setUserState("userLoggedInPerfil");
          }}
        >
          <Astronaut />
          <LinkButton path="/userdashboard" text="Perfil" line={true} />
        </LinkButtonWithSvgStyled>
      );
    case "planet":
      return (
        <LinkButtonWithSvgStyled onClick={() => setMainComponent("posts")}>
          <Planet />
          <LinkButton path="/userdashboard" text="My Posts" line={true} />
        </LinkButtonWithSvgStyled>
      );
    case "plus":
      return (
        <LinkButtonWithSvgStyled
          onClick={() => setMainComponent("registerPost")}
        >
          <Plus />
          <LinkButton path="/userdashboard" text="New Post" line={true} />
        </LinkButtonWithSvgStyled>
      );
  }
};
