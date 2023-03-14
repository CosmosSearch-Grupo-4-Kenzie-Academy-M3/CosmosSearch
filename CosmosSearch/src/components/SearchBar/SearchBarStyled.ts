import styled from "styled-components";

export const SearchBarContainer = styled.form`
  height: 100%;
  margin-left: -1.4rem;
  display: flex;

  .animation {
    height: 100%;

    animation: input--in ease-in-out .5s forwards;
    display: flex;
  }

  .animation--btn {
    height: 100%;

    animation: btn--in ease-in-out .5s forwards;
    display: flex;
  }
  
  .open__search {
    margin-left: 1.4rem;
  }

  .search__border {
    border: 2px solid var(--primary-blue);

    padding: 0.2rem;
  }

  .search__border--close {
    border: 2px solid transparent;

    padding: 0.2rem;
  }

  .searchbar__header {
    height: 100%;
    width: 100%;

    display: flex;
  }
  .close__button {
    background-color: transparent;
    margin-right: -0.8rem;
  }
  input {
    height: 100%;
    width: 100%;
    border: 1px solid green;

    background-color: transparent;
    border: 2px solid var(--primary-blue);
    border-right: none;

    padding-inline: 0.5rem;
  }
  button {
    cursor: pointer;
    background-color: transparent;
  }

  /* MediaQuerys */
  @media (min-width: 330px) {
    input {
      width: 100%;
    }
  }

  /* KeyFrames */
  @keyframes input--in {
    0% {
      transform: translateX(-200%);
      opacity: .1;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes btn--in {
    0% {
      opacity: .1;
    }
    100% {
      opacity: 1;
    }
  }
`;
