import styled from "styled-components";

export const StartStyled = styled.div`
    height: 100%;
    width: 100%;
    
    .burger__div {
        height: 103px;
        width: 100%;

        margin-bottom: 68px;

        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .burger__menu {
        width: max-content;

        cursor: pointer;
    }

    .links__start {
        display: flex;
        flex-direction: column;
        gap: var(--links-distance-line-to-text);
    }

    .top__start {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 441px) {
        .top__start {
            align-items: flex-start;
        }
    }
`