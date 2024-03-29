import { useContext } from "react";

import { Astronaut, Planet, Plus } from "../../../components/Svgs/Svg";
import {
  DivForButtonsStyled,
  DivForButtonsStyledMobile,
} from "./DivForButtonsStyled";
import { LinkButtonWithSvg } from "./LinkButtonWithSvg/LinkButtonWithSvg";

import { LinksContext } from "../../../contexts/LinksContext/LinksContext";
import { SearchBar } from "../../../components/SearchBar/SearchBar";

export const DivForButtons = () => {
  const { burgerOpen, setMainComponent } = useContext(LinksContext);

  return (
    <>
      {/* Mobile */}
      <DivForButtonsStyledMobile className="container__pages">
        {burgerOpen ? (
          <div className="divForButtonsStyledMobile__burgerOpen">
            <div onClick={() => setMainComponent("updatePerfil")}>
              <Astronaut />
            </div>
            <div onClick={() => setMainComponent("posts")}>
              <Planet />
            </div>
            <div onClick={() => setMainComponent("registerPost")}>
              <Plus />
            </div>
          </div>
        ) : (
          <div className="divForButtonsStyledMobile__burgerClosed">
            <div onClick={() => setMainComponent("updatePerfil")}>
              <Astronaut />
            </div>
            <div onClick={() => setMainComponent("posts")}>
              <Planet />
            </div>
            <div onClick={() => setMainComponent("registerPost")}>
              <Plus />
            </div>
          </div>
        )}
      </DivForButtonsStyledMobile>
      {/* Desktop */}
      <DivForButtonsStyled className="container__pages">
        <div className=" divForButtonStyled__burgerClosed">
          <div className="searchbar__burguer--desktop">
            <SearchBar />
          </div>
          <LinkButtonWithSvg icon="astronaut" />
          <LinkButtonWithSvg icon="planet" />
          <LinkButtonWithSvg icon="plus" />
        </div>
      </DivForButtonsStyled>
    </>
  );
};
