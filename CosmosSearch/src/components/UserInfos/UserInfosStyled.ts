import styled from "styled-components"

export const UserInfosContainer = styled.div`
    border: 1px solid var(--primary-blue);

    height: 38px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-inline: .5rem;

    margin-top: 1rem;

    @media(min-width: 560px){
        margin-right: 20px;
    }
    @media(min-width: 920px){
        flex-direction: column;
        align-items: flex-start;
        height: max-content;
        gap: 2rem;

        border: none;
    }
`