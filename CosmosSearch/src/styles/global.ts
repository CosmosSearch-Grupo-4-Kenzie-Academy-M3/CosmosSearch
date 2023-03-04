import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    html, body, dialog, figure, img, div, section, article, input, select, button, textarea, p, h1, h2, h3, h4, h5, h6, ul, li, a{
        margin: 0;
        padding: 0;

        border: none;
        outline: none;
        list-style: none; 
        text-decoration: none;
        
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
`;

export const GlobalStyle = createGlobalStyle`
    :root {
        /* Colors */
        --primary-blue: #BADBD7;
        --grey-1: #555556;
        --error-form: #FC035D;

        /* Font-Size */
        --fs-50: 3.125rem;
        --fs-30: 1.875rem;
        --fs-29: 1.8125rem;
        --fs-25: 1.5625rem;
        --fs-10: .625rem;

        /* Font-Weight */
        --fw-700: 700;
        --fw-600: 600;
        --fw-500: 500;
        --fw-400: 400;

        /* Border-Radius */
        --br-8: 8px

        /* Heights */
        --inpt-height: 3.125rem;
        --btn-height: 2.625rem;
        --box-title-height: 5.875rem;
        --links-distance-line-to-text: 1.815rem;
        --post-height: 8rem;
    }
`;
