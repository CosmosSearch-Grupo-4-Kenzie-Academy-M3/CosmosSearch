import styled from "styled-components";

interface iAppStyled {
    bg: string
}

export const AppStyled = styled.div<iAppStyled>`
    height: 100vh;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
