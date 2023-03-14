import styled from "styled-components";

export const SearchBarContainer = styled.form`
  height: 100%;

  .animation {
    height: 100%;
    animation: input--in ease-in-out .5s forwards;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: .2rem
  }

  .animation--btn {
    height: 100%;

    animation: btn--in ease-in-out .5s forwards;
    display: flex;
  }
  
  .open__search {
    /* margin-left: 1.4rem; */
    border: 2px solid red;
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
    margin-top: .2rem;
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
