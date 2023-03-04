import styled from "styled-components";

import { iAppStyled } from "./@types__styles";

export const AppStyled = styled.div<iAppStyled>`
  height: 100vh;
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

  @media (min-width: 1000px) {
    .container__page--start {
      min-width: 82.5%;
      flex-direction: row;
    }
  }
`;
