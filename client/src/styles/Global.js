import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *:before, 
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all .3s ease-in-out;
    }

    html {
        height: 100%;
        min-height: 100vh;
        width: 100%;
        max-width: 100vw;
        font-size: 10px;
        overflow-x: hidden;
    }

    body {
        background: #fff;
        color: #37392E;
        font-family: Helvetica, sans-serif;
        font-size: 1.6rem;
    }

    a {
        color: #37392E;
        text-decoration: none;

        &:hover {
            color: #28AFB0;
        }
    }
`

export default GlobalStyles;