import styled from "styled-components";

export const LoginFormStyled = styled.form`
    width: 250px;
    
    padding: 1rem;

    margin-top: 1rem;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    border-top: 1px solid white;
    border-bottom: 1px solid white;

    /* MediaQuery */
    @media (min-width: 380px) {
        width: max-content;
    }

    @media (min-width: 560px) {
        margin-right: 20px;
    }
`