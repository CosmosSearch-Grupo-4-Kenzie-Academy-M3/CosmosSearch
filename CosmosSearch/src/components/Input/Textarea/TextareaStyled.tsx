import styled from "styled-components";


export const TextareaStyled = styled.div`
  border: none;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .label {
    align-self: flex-start;
  }
  
  .containerInputSpan {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    gap: 5px;
  }

  textarea {
    height: 200px;

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
    width: 380px;
    padding-inline: 40px;
  }
`;
