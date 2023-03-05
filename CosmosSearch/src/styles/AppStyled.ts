import styled from "styled-components";

import { iAppStyled } from "./@types__styles";

export const AppStyled = styled.div<iAppStyled>`

  min-height: 100vh;
  max-height: max-content;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .title__box {
    display: none;
  }

  /* Media Query */
  @media (min-width: 441px) {
    .title__box {
      display: block;
    }

    .small__logo {
      display: none;
    }
  }
`;

export const DivOpacity = styled.div`
  height: 100%;
  width: 100%;

  background-color: rgba(0,0,0, .4);
`
