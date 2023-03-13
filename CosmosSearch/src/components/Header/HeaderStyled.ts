import styled from "styled-components";

export const FixedDiv = styled.div`
  width: 100%;
  height: max-content;

  z-index: 100;

  position: fixed;
`;

export const HeaderStyled = styled.header`
  border-bottom: 2px solid var(--primary-blue);

  .header__container {
    width: 100%;
    height: 6.625rem;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
  }

  .container__header--mobileSmall {
    width: 100%;

    margin-inline: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 20px;

    .title__box--header {
      display: none;
    }

    /* MediaQuerys */
    @media (min-width: 560px) {
      .title__box--header {
        display: block;
      }

      .small__logo--header {
        display: none;
      }
    }

    .links__start--header {
      display: flex;
      gap: 1rem;

      position: absolute;

      top: 11rem;
      left: 20px;
    }
    .links__start--header--logged {
      display: flex;
      gap: 1rem;

      position: absolute;

      top: 9rem;
      left: 20px;
    }
  }

  .links__start--headerDesktop {
    display: none;
  }

  .searchbar__inIcons {
    display: none;
  }

  .searchbar__inIcons--inperfil {
    display: none;
  }

  /* MediaQuerys */
  @media(min-width: 560px){
    .icons {
      display: flex;
      align-items: center;
      height: 30px;
      gap: 1rem;
    }
    .searchbar__inIcons--inperfil {
      display: block;
      height: 100%;
    }
  }

  @media (min-width: 790px) {
    .searchbar__inIcons {
      display: block;
      height: 100%;
    }
  }
  @media (min-width: 920px) {
    .icons {
      display: none;
    }
    .links__start--headerDesktop {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      height: 30px;

      background-color: transparent;

      border: transparent;
    }
  }

  @media (min-width: 1700px) {
    .header__container {
      width: 1700px;
      margin-inline: auto;
    }
  }
`;
