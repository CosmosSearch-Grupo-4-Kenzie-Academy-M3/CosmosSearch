import styled from "styled-components";

export const RegisterUserFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  box-sizing: border-box;

  border-top: 1px solid white;
  border-bottom: 1px solid white;

  width: 220px;

  padding-inline: 20px;
  padding-block: 30px;

  margin-block: 2rem;

  /* MediaQuery */
  @media (min-width: 380px) {
    width: max-content;
  }
`;
