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

  .searchbar {
    height: 30px;
    width: 100%;
    padding-left: 20px;
    position: absolute;
    top: 12rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .searchbar__burgueropen {
    height: 30px;
    width: 100%;
    padding-left: 20px;
    position: absolute;
    top: 17rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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

      .searchbar__burguer--desktop {
        height: 30px;
        width: 100%;
        padding-left: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
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
      .searchbar__burguer--desktop {
        display: none !important;
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
