import styled from "styled-components";

export const UserDashboardStyled = styled.div`
  min-height: 100vh;
  max-height: max-content;
  width: 100%;

  .main__burgerOpen {
    margin-top: 7rem;
  }

  .userdash__desktop {
    display: none;
  }

  @media (min-width: 560px) {
    .userdash__desktop {
      display: block;

      main {
        width: 100%;

        display: flex;
        justify-content: space-between;
      }
    }

    .userdash__mobile {
      display: none;
    }

    @media (min-width: 920px) {
      .main__burgerOpen {
        margin-top: 1rem;
      }
    }
  }
`;
