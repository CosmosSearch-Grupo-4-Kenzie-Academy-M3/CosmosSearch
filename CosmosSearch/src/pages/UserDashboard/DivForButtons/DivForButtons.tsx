import { useContext } from "react";

import { LinksContext } from "../../../contexts/LinksContext/LinksContext";

import { Astronaut, Planet, Plus } from "../../../components/Svgs/Svg";
import {
  DivForButtonsStyled,
  DivForButtonsStyledMobile,
} from "./DivForButtonsStyled";
import { LinkButtonWithSvg } from "./LinkButtonWithSvg/LinkButtonWithSvg";

export const DivForButtons = () => {
  const { burgerOpen } = useContext(LinksContext);

  return (
    <>
      {/* Mobile */}
      <DivForButtonsStyledMobile className="container__pages">
        {burgerOpen ? (
          <div className="divForButtonsStyledMobile__burgerOpen">
            <Astronaut />
            <Planet />
            <Plus />
          </div>
        ) : (
          <div className="divForButtonsStyledMobile__burgerClosed">
            <Astronaut />
            <Planet />
            <Plus />
          </div>
        )}
      </DivForButtonsStyledMobile>
      {/* Desktop */}
      <DivForButtonsStyled className="container__pages">
        <div className=" divForButtonStyled__burgerClosed">
          <LinkButtonWithSvg icon="astronaut" />
          <LinkButtonWithSvg icon="planet" />
          <LinkButtonWithSvg icon="plus" />
        </div>
      </DivForButtonsStyled>
    </>
  );
};
