import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    html, body, main, dialog, figure, img, div, section, article, input, select, button, textarea, p, h1, h2, h3, h4, h5, h6, ul, li, a{
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
        --white: #fff;
        --primary-blue: #BADBD7;
        --primary-blue-opct: rgba(186,219,215, .3);
        --grey-1: #555556;
        --grey-2-opct: rgba(53,54,54,.2);
        --error-form: #FC035D;

        /* Font-Family */
        --ff-Oswald: 'Oswald', sans-serif;
        --ff-Inter: 'Inter', sans-serif;

        /* Font-Size */
        --fs-50: 3.125rem;
        --fs-30: 1.875rem;
        --fs-29: 1.8125rem;
        --fs-25: 1.5625rem;
        --fs-16: 1rem;
        --fs-10: .625rem;

        /* Font-Weight */
        --fw-700: 700;
        --fw-600: 600;
        --fw-500: 500;
        --fw-400: 400;

        /* Border-Radius */
        --br-8: 8px;

        /* Heights */
        --inpt-height: 3.125rem;
        --btn-height: 2.625rem;
        --box-title-height: 5.875rem;
        --links-distance-line-to-text: 1.815rem;
        --post-height: 8rem;
    }

    /* Utility-Classes */
    /* Container */
    .container__page--start {
        max-width: max-content;
        width: 92%;
        height: 100%;

        margin: auto;
        padding-block: 68px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    .container__pages--forms {
        padding-inline: 7rem;
    }

    .container__pages {
        padding-inline: 20px;
    }

    .burger__menu {
        width: max-content;

        cursor: pointer;
     }

     .close__menu {
        width: max-content;

        cursor: pointer;
     }

    /* Texts */
    .title__primary {
        font-family: var(--ff-Oswald);
        font-size: var(--fs-50);
        font-weight: var(--fw-500);
        letter-spacing: 7px;
        color: var(--primary-blue);
    }

    .links {
        font-family: var(--ff-Inter);
        font-size: var(--fs-30);
        font-weight: var(--fw-400);
        color: var(--primary-blue);
    }

    .title__posts {
        font-family: var(--ff-Oswald);
        font-size: var(--fs-30);
        font-weight: var(--fw-500);
        letter-spacing: 12%;
        color: var(--primary-blue);
    }

    .title__comments {
        font-family: var(--ff-Oswald);
        font-size: 1rem;
        font-weight: var(--fw-500);
        letter-spacing: 12%;
        color: var(--primary-blue);
    }

    .post__text__preview {
        font-family: var(--ff-Inter);
        font-size: var(--fs-25);
        font-weight: var(--fw-400);
        color: var(--white);
    }

    .post__text__preview--mobile {
        font-family: var(--ff-Inter);
        font-size: 1rem;
        font-weight: var(--fw-400);
        color: var(--white);
    }

    .input__label {
        font-family: var(--ff-Inter);
        font-size: var(--fs-20);
        font-weight: var(--fw-400);
        color: var(--primary-blue);
    }

    .input__placeholder {
        font-family: var(--ff-Inter);
        font-size: var(--fs-10);
        font-weight: var(--fw-400);
        color: var(--primary-blue);
    } 

    /* LinksLine */
    .links__line {
        width: 73px;

        border-top: 2px solid var(--primary-blue);
        margin-top: var(--links-distance-line-to-text);
    }

    /* MediaQuery */
    @media (min-width: 1000px) {
    .container__page--start {
      min-width: 100%;
      height: 100vh;
      padding-inline: 7rem  ;
      flex-direction: row;
    }
  }
`;
