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
    max-width: 100%;
    height: max-content;

    padding: 1.25rem;

    background-color: var(--grey-2-opct);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    .post__text__preview {
      display: block;
      overflow-wrap: break-word;
    }

    .date__and__button {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .button {
      display: flex;
      align-items: flex-end;
 

      gap: 1rem;
      align-self: flex-end;
    }

    /* MediaQuery */
    @media (min-width: 460px) {
      .date__and__button {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
      }
    }

    @media (min-width: 550px) {
      .date__and__button {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }

    @media (min-width: 1000px) {
      height: 350px;
    }
  }

  /* MediaQuery */
  @media (min-width: 1130px) {
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;

      transition: 0.25s;
      :hover {
        transform: scale(1.3);
      }
      :hover img {
        animation: planetAnimation ease-in-out 1s infinite;
      }
    }
  }

  /* KeyFrames */
  @keyframes planetAnimation {
    0% {
      transform: translateY(0);
    }
    12% {
      transform: translateY(5%);
    }
    25% {
      transform: translateY(10%);
    }
    37% {
      transform: translateY(5%);
    }
    50% {
      transform: translateY(0);
    }
    62% {
      transform: translateY(-5%);
    }
    75% {
      transform: translateY(-10%);
    }
    87% {
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const DivsButtonsStyled = styled.div`
  align-self: flex-start;



  width: 40px;
  height: 40px;

  background-color: transparent;

  cursor: pointer;

  .buttons {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 50px;
    object-fit: contain;

    gap: .5rem;
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
  background-color: transparent;

  border: 2px solid transparent;

  cursor: pointer;
`;
