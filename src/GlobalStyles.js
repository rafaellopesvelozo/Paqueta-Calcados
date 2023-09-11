import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: sans-serif;
        word-wrap: break-word;
    }

    p, h1, h2, h3, h4, h5, h6{
        margin: 0;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
   
    
    body,#root, html{
        position: relative;
        max-width: 1920px;
        height: 100vh;
        margin: 0 auto;
    }
`;
