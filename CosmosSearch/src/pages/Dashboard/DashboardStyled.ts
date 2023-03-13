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
    margin-top: 7.5rem;
  }

  .main__burgerClosed {
    margin-top: 4.5rem;
  }

  .main__desktop {
    display: none;
  }

  .searchbar {
    height: 30px;
    width: 100%;

    padding-left: 20px;

    position: absolute;
    top: 8rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  /* MediaQuery */
  @media (min-width: 380px) {
    .main__burgerOpen--logged {
      margin-top: 4.3rem;
    }
  }

  @media (min-width: 400px) {
    .main__burgerClosed--logged {
      margin-top: 1.1rem;
    }
  }

  @media (min-width: 790px) {
    .searchbar {
      display: none;
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
    /* .searchbar {
      display: none;
    } */
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
      width: 1700px;
    }

    .newpost__position {
      top: 1rem;
      right: -0.5rem;
    }
  }
`;
