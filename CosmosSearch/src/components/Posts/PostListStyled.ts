import styled from "styled-components";

export const PostListStyled = styled.ul`
    width: 100%;
    max-width: 800px;
    height: max-content;

    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const PostStyled = styled.li`
    width: 100%;
    height: 400px;

    padding: 1.25rem;

    background-color: var(--grey-2-opct);
`