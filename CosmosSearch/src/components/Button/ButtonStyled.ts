import styled from "styled-components";

interface iButtonStyled {
    borderColor: string
    textColor: string 
}

export const ButtonStyled = styled.button<iButtonStyled>`
    height: 2.625rem;

    padding-inline: 1.25rem;

    border: 2px solid ${props => props.borderColor};

    color: ${props => props.textColor};

    background-color: transparent;

    border-radius: var(--br-8);

    display: flex;
    justify-content: center;
    align-items: center;
`