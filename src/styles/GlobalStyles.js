import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    *::before,
    *::after{
        box-sizing: inherit;
    }
    html{
        font-size: 62.5%;
        line-height: 1.3;
    }
    li{
        list-style-type: none;
    }
    a{
        text-decoration: none;
    }
`;

export default GlobalStyles;