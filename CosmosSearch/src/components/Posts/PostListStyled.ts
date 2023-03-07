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
    max-width: 873px;
  }
`;

export const PostStyled = styled.li`
    display: flex;
    gap: 2rem;

   .icon {
    display: none;
   } 

  .post {
    width: 100%;
    height: 370px;

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
      gap: 1rem;
      align-self: flex-end;
    }

    /* MediaQuery */
    @media (min-width: 440px) {
      height: 250px;

      .date__and__button {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }

    @media (min-width: 560px) {
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
