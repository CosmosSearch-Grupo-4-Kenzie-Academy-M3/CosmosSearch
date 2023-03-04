import styled from "styled-components";

import { iAppStyled } from "./@types__styles";

export const AppStyled = styled.div<iAppStyled>`
    height: 100vh;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
