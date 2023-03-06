import { useContext } from "react";
import { LinkButton } from "../../../../components/LinkButton/LinkButton";
import { Astronaut, Planet, Plus } from "../../../../components/Svgs/Svg";
import { LinksContext } from "../../../../contexts/LinksContext/LinksContext";
import { LinkButtonWithSvgStyled } from "./LinkButtonWithSvgStyled";

interface iLinkButtonWithSvg {
  icon: "astronaut" | "planet" | "plus";
}

export const LinkButtonWithSvg = ({ icon }: iLinkButtonWithSvg) => {
  const { setMainComponent } = useContext(LinksContext);

  switch (icon) {
    case "astronaut":
      return (
        <LinkButtonWithSvgStyled onClick={() => setMainComponent("updatePerfil")}>
          <Astronaut />
          <LinkButton text="Perfil" line={true}/>
        </LinkButtonWithSvgStyled>
      );
    case "planet":
      return (
        <LinkButtonWithSvgStyled>
          <Planet />
          <LinkButton text="My Posts" line={true} />
        </LinkButtonWithSvgStyled>
      );
    case "plus":
      return (
        <LinkButtonWithSvgStyled>
          <Plus />
          <LinkButton text="New Post" line={true} />
        </LinkButtonWithSvgStyled>
      );
  }
};
