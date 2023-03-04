import { SmallLogoStyled, TitleBordersStyled } from "./TitleStyled";

import SmallLogo from "../../assets/svgs/SmallMobileLogo.svg";

export const Title = () => {
  return (
    <>
      <SmallLogoStyled
        src={SmallLogo}
        alt="CosmosSeach Small Logo"
        marginTop="68px"
        marginBottom="58px"
        className="small__logo"
      />
      <TitleBordersStyled
        marginTop="68px"
        marginBottom="58px"
        className="title__box"
      >
        <p className="title__primary">CosmosSearch</p>
      </TitleBordersStyled>
    </>
  );
};
