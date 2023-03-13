import styled from "styled-components";

export const SearchBarContainer = styled.form`
  height: 100%;
  margin-left: -1.4rem;


  display: flex;
  .open__search {
    margin-left: 1.4rem;
  }

  .search__border {
    border: 2px solid var(--primary-blue);

    padding: .2rem;
  }

  .search__border--close {
    border: 2px solid transparent;

    padding: .2rem;
  }

  .searchbar__header {
    height: 100%;
    width: 100%;
 
    display: flex;
  }
  .close__button {
    background-color: transparent;
    margin-right: -.8rem;
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

  @media (min-width: 330px) {
    input {
      width: 100%;
    }
  }
`;
