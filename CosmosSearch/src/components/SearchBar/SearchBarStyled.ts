import styled from "styled-components";

export const SearchBarContainer = styled.div`
  height: 100%;

  display: flex;
  input {
    height: 100%;
    border: 1px solid green;

    background-color: transparent;
    border: 2px solid var(--primary-blue);

    padding-left: 0.5rem;
  }
  button {
    background-color: transparent;
  }
`;
