import styled from "styled-components";

export const PostListStyled = styled.ul`
  width: 100%;
  max-width: 800px;
  height: max-content;

  margin-top: 1rem;

  display: flex;
  flex-direction: column-reverse;
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
    align-items: center;
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
      justify-content: center;
      gap: 1rem;
      align-self: flex-end;
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

      :hover img {
        animation: planetAnimation infinite;
      }
    }
  }

  /* KeyFrames */
  @keyframes planetAnimation {
    0% {
      transform: translateY(10%);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10%);
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
    position: relative;

    display: flex;
    flex-direction: column;

    gap: 1rem;
  }
`;

interface IButtonsStyled {
  top: string;
}

export const ButtonsStyled = styled.button`
  position: relative;

  background-color: transparent;

  border: 2px solid transparent;

  cursor: pointer;
`;

export const ButtonsAbsoluteStyled = styled.button<IButtonsStyled>`
  position: absolute;

  top: ${(props) => props.top};

  right: 0.2rem;

  background-color: transparent;

  border: 2px solid transparent;

  cursor: pointer;
`;
