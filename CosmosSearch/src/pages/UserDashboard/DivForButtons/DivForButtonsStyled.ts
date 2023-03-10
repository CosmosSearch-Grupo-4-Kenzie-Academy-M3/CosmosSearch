import styled from "styled-components";

export const DivForButtonsStyled = styled.div`
  display: none;

  .divForButtonStyled__burgerClosed {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .divForButtonStyled__burgerOpen {
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .test {
    border: 2px solid red;
  }

  /* MediaQuery */
  @media (min-width: 560px) {
    display: block;
  }

  @media (min-width: 920px) {
    .divForButtonStyled__burgerOpen {
      margin-top: 1rem;
    }
  }
`;

export const DivForButtonsStyledMobile = styled.div`
  padding-inline: 20px;

  .divForButtonsStyledMobile__burgerClosed {
    width: 100%;

    margin-top: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .divForButtonsStyledMobile__burgerOpen {
    width: 100%;

    margin-top: 6rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* MediaQuery */
  @media (min-width: 560px) {
    display: none;
  }
`;
