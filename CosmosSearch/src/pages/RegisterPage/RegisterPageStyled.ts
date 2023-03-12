import styled from "styled-components";

export const RegisterPageStyled = styled.main`
  min-height: 100vh;
  max-height: max-content;
  color: white;
  align-items: center;
  display: flex;
  justify-content: space-between;

  .colum {
    border-left: 2px solid var(--primary-blue);
  }

  .linksDesktop {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    :hover .links__line {
      width: 20px;
    }
  }

  .linksMobile {
    display: none;
  }

  @media (max-width: 1018px) {
    justify-content: unset;
    gap: 4.25rem;

    .linksMobile {
      display: flex;

      :hover .links__line {
        width: 20px;
      }
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
