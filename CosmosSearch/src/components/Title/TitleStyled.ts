import styled from "styled-components";

interface iTitle {
    marginTop?: string,
    marginBottom: string
}

export const TitleBordersStyled = styled.div<iTitle>`
    width: max-content;
    height: max-content;

    padding: 0 15px 15px 15px;

    border: 2px solid var(--primary-blue);

    background-color: transparent;

    display: flex;
    justify-content: center;
    text-align: center;

    margin-top: ${props => props.marginTop ? props.marginTop : null};
    margin-bottom: ${props => props.marginBottom};
`