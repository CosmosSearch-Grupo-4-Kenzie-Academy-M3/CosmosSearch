import styled from "styled-components";

interface ITextareaStyled {
  width?: string;
}

export const TextareaStyled = styled.div<ITextareaStyled>`
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
    max-width: ${(props) => props.width ? props.width : "380px"};
    gap: 5px;
  }

  textarea {
    /* width: ${(props) => (props.width ? "440px" : "unset")}; */
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
`;
