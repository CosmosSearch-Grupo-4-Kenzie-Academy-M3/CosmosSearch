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
    margin-top: 7rem;
  }

  .main__burgerClosed {
    margin-top: 2.5rem;
  }

  .main__desktop {
    display: none;
  }

  /* MediaQuery */
  @media (min-width: 800px) {
    main {
      width: max-content;
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
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1rem;
    }
  }

  @media (min-width: 1056px) {
    .newpost__position {
      position: absolute;

      right: 20px;
      top: 7.8rem;
    }

    .main__desktop {
      margin-top: 0;
      /* padding-top: 8rem; */
    }
  }
`;
