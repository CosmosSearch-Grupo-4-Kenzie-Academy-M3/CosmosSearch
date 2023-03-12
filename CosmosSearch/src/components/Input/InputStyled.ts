import styled from "styled-components";

export const ImputStyled = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;

  .containerInputSpan {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    gap: 5px;
  }

  input {
    border-radius: 4px;

    background: none;
    border: solid 1px var(--primary-blue);
    color: var(--primary-blue);
    font-size: 16px;
    padding: 10px;
  }

  .spanError {
    color: var(--error-form);
    font-size: 14px;
    font-family: var(--ff-Inter);
  }

  @media (min-width: 380px) {
    width: 300px;
  }
`;
