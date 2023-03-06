import styled from "styled-components";

export const UserDashboardStyled = styled.div`
  min-height: 100vh;
  max-height: max-content;
  width: 100%;

  .main__burgerOpen {
    margin-top: 7rem;
    border: 2px solid rebeccapurple;
  }

  .userdash__desktop {
    display: none;
  }

  @media (min-width: 550px) {
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
  }
`;
