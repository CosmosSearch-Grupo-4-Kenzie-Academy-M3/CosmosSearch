import styled from "styled-components";

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

    @media (min-width: 540px) {
    .title__box--header {
      display: block ;
    }

    .small__logo--header {
      display: none;
    }
  }

  .links__start--header {
    display: flex;
    gap: 1rem;
    
    position: absolute;

    top: 10rem;
  }

  .colum {
    border-left: 2px solid var(--primary-blue);
  }
}


`;
