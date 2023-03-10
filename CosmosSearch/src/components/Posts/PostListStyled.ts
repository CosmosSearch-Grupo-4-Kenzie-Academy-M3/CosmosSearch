import styled from "styled-components";

export const PostListStyled = styled.ul`
  width: 100%;
  max-width: 800px;
  height: max-content;

  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* MediaQuery */
  @media (min-width: 1130px) {
    min-width: 873px;
  }
`;

export const PostStyled = styled.li`
  display: flex;
  gap: 2rem;

  .post__header {
    display: flex;
    justify-content: space-between;
  }

  .icon {
    display: none;
  }

  .post {
    width: 100%;
    height: 440px;

    padding: 1.25rem;

    background-color: var(--grey-2-opct);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .date__and__button {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .button {
      display: flex;
      align-items: center;
      gap: 1rem;
      align-self: flex-end;

      cursor: pointer;

      :hover button {
        background-color: var(--primary-blue-opct);
      }
    }

    /* MediaQuery */
    @media (min-width: 330px) {
      height: 370px;
    }

    @media (min-width: 440px) {
      height: 250px;

      .date__and__button {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }

    @media (min-width: 550px) {
      height: 250px;

      .date__and__button {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  /* MediaQuery */
  @media (min-width: 1130px) {
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const DivsButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background-color: transparent;

  cursor: pointer;

  .buttons {
    display: flex;
    flex-direction: column;

    align-self: flex-start;
    gap: 1rem;
  }
`;

export const ButtonsStyled = styled.button`
  background-color: transparent;

  cursor: pointer
`


