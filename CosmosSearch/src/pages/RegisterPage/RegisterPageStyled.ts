import styled from "styled-components";

export const RegisterPageStyled = styled.main`
  min-height: 100vh;
  max-height: max-content;
  color: white;
  align-items: center;
  display: flex;
  justify-content: space-between;
  /* gap: 100px; */

  .colum {
    border-left: 2px solid var(--primary-blue);
  }

  .linksDesktop {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .linksMobile {
    display: none;
  }

  @media (max-width: 950px) {
    .linksMobile {
      display: flex;
    }

    .linksDesktop {
      display: none;
    }

    .colum {
      background-color: red;
    }

    flex-direction: column;

    > div {
      display: flex;
      flex-direction: column;
    }

    div div {
      display: flex;
      gap: 20px;
    }
  }
`;
