import styled from "styled-components";

export const PostDeleteDivStyled = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;

  min-height: 100%;
  max-height: 100vmax;
  width: 100%;

  padding-inline: 1rem;

  background-color: rgba(0, 0, 0, 0.6);
`;

export const PostDeleteStyled = styled.div`
  position: relative;

  height: 200px;
  width: 100%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 0 2.75rem;

  z-index: 100;

  margin-top: 1rem;

  border: 2px solid var(--primary-blue);
  border-radius: 8px;

  background-color: var(--grey-1);

  /* MediaQuery */
  @media (min-width: 287px) {
    height: 150px;
  }
`;

export const PostDeleteButtonStyled = styled.button`
  border: 2px solid var(--primary-blue);

  background-color: red;

  height: 50px;
  width: 90%;
  max-width: 160px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--ff-Oswald);
  font-size: 1rem;
  color: var(--primary-blue);

  cursor: pointer;
`
