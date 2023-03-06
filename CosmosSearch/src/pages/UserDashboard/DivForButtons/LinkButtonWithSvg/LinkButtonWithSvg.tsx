import { LinkButton } from "../../../../components/LinkButton/LinkButton";
import { Astronaut, Planet, Plus } from "../../../../components/Svgs/Svg";
import { LinkButtonWithSvgStyled } from "./LinkButtonWithSvgStyled";

interface iLinkButtonWithSvg {
  icon: "astronaut" | "planet" | "plus";
}

export const LinkButtonWithSvg = ({ icon }: iLinkButtonWithSvg) => {
  switch (icon) {
    case "astronaut":
      return (
        <LinkButtonWithSvgStyled>
          <Astronaut />
          <LinkButton text="Perfil" line={true} />
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
