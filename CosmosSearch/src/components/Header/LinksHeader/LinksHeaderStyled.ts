import styled from "styled-components";

export const LinksHeaderStyled = styled.div`
  .non__animation {
    display: flex;
    gap: 1rem;
  }

  .links__header--in {
    display: flex;
    gap: 1rem;
    animation: links__header--in 1s forwards;
  }

  .links__header--out {
    display: flex;
    gap: 1rem;

    animation: links__header--out 1s forwards;
  }

  button {
    background-color: transparent;

    width: max-content;
  }

  .colum {
    border-left: 2px solid var(--primary-blue);
  }

  /* KeyFrames */
  @keyframes links__header--in {
    0% {
      transform: translateY(-500%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @keyframes links__header--out {
    0% {
      transform: translateY(0%);
      opacity: 1;
    }
    100% {
      transform: translateY(-500%);
      opacity: 0;
    }
  }
`;
