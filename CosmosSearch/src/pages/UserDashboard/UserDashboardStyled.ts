import styled from "styled-components";

export const UserDashboardStyled = styled.div`
  min-height: 100vh;
  max-height: max-content;
  width: 100%;

  .container__form {
    padding-inline: 20px;
  }

  .main__burgerOpen {
    margin-top: 7rem;
  }

  .userdash__desktop {
    display: none;
  }

  /* MediaQuery */
  @media (min-width: 380px) {
    .container__form {
      display: flex;
      justify-content: center;
      align-items: center;
    }
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
      .user__section {
        display: flex;
        justify-content: space-between;

        width: 80%;
      }
    }
  }

  @media (min-width: 1700px) {
    .main__user {
      max-width: 1700px;
      margin-inline: auto;
    }
  }
`;
