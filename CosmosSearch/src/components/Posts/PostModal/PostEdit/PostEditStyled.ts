import styled from "styled-components";

export const PostEditModalDivStyled = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;

  min-height: 100%;
  max-height: max-content;
  width: 100%;

  padding-inline: 1rem;

  background-color: rgba(0, 0, 0, 0.6);
`;

export const PostEditModalStyled = styled.div`
  position: relative;

  height: 450px;
  width: 100%;
  max-width: 650px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2.25rem 2.75rem;

  z-index: 100;

  margin-top: 1rem;

  border: 2px solid var(--primary-blue);
  border-radius: 8px;

  background-color: var(--grey-1);
`;
