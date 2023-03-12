import styled from "styled-components";

export const FixedDiv = styled.div`
  width: 100%;
  height: max-content;

  z-index: 100;

  position: fixed;
`;

export const HeaderStyled = styled.header`
  width: 100%;
  height: 6.625rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  border-bottom: 2px solid var(--primary-blue);

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

      top: 9rem;
      left: 20px;
    }
  }

  .links__start--headerDesktop {
    display: none;
  }

  /* MediaQuerys */
  @media (min-width: 920px) {
    .icons {
      display: none;
    }
    .links__start--headerDesktop {
      display: block;
    }
  }
`;
