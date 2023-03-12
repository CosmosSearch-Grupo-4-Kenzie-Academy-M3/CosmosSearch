import styled from "styled-components";

export const DashboardStyled = styled.div`
  position: relative;

  min-height: 100vh;
  max-height: max-content;
  width: 100%;

  main {
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main__burgerOpen {
    margin-top: 5.5rem;
  }

  .main__burgerClosed {
    margin-top: 2.5rem;
  }

  .main__desktop {
    display: none;
  }

  /* MediaQuery */
  @media (min-width: 380px) {
    .main__burgerOpen--logged {
      margin-top: 2.3rem;
    }
  }

  @media (min-width: 800px) {
    main {
      width: 800px;
    }
  }

  @media (min-width: 920px) {
    .main__burgerOpen {
      display: none;
    }
    .main__burgerClosed {
      display: none;
    }
    .main__desktop {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 3rem;
    }
    .newpost__position {
      position: absolute;

      top: -2rem;
      right: -0.1rem;
    }
  }

  @media (min-width: 1096px) {
    .newpost__position {
      position: absolute;

      right: 0px;
      top: 7.8rem;
    }

    .main__desktop {
      position: static;
      margin-top: 0;
    }
  }

  @media (min-width: 1700px) {
    .main__desktop {
      position: relative;
      border: 2px solid red;
      width: 1700px;
    }

    .newpost__position {
      top: 1rem;
      right: -.5rem;
    }
  }
`;
