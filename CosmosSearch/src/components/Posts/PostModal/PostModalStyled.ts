import styled from "styled-components";

export const PostModalDivStyled = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;

  height: 100%;
  width: 100%;

  padding-inline: 1rem;

  background-color: rgba(0, 0, 0, 0.6);
`;

export const PostModalStyled = styled.div`
  position: relative;

  height: 650px;
  width: 100%;
  max-width: 650px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2.25rem 2.75rem;

  margin-top: 10rem;

  border: 2px solid var(--primary-blue);
  border-radius: 8px;

  background-color: var(--grey-1);
`;

export const CloseButton = styled.button`
  position: absolute;

  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background-color: transparent;

  cursor: pointer;
`;

export const HeaderModal = styled.header`
  width: 100%;
  height: max-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContentDiv = styled.div`
  width: 100%;
  height: 210px;

  padding: 1rem;

  overflow-y: auto;

  border: 2px solid var(--primary-blue);
`;

export const CommentsList = styled.div`
  width: 100%;
  height: 220px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  overflow-y: auto;

  border: 2px solid var(--primary-blue);

  ul {
    width: 100%;
    height: 220px;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    overflow-y: auto;    
  }

  .comments__header {
    width: 100%;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .plus__comment {
    width: max-content;
    height: 100%;
  }
`;

export const CommentDiv = styled.li`
  width: 100%;
  min-height: 50px;
  height: 210px;

  overflow-y: auto;

  /* border-bottom: 2px solid var(--primary-blue); */
  border-right: 2px solid var(--primary-blue);
`;

export const InfosDiv = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const DivInput = styled.div`
  position: relative;
`;

export const NewCommentInput = styled.input`
  width: 100%;
  min-height: 50px;

  padding-left: 1rem;

  margin-inline: auto;

  background-color: transparent;

  border: 2px solid var(--primary-blue);
`;

export const NewCommentInputButton = styled.button`
  height: 100%;
  width: max-content;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 1rem;

  background-color: transparent;

  cursor: pointer;
`;
