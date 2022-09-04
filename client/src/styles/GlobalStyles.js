import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
    }
    html, body, #root {
        /* min-height: 100%;
        height: 100%;
        width: 100%; */
    }
    *, button,input {
        border: 0;
        background: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    html {
       /*  background: var(--secondary); */
        /* height: 100%; */
    }
    body {
        /* min-height: 100vh; */
    }
    :root {
        --primary: #000;
        --secondary: #15181C;
        --search: #202327;
        --white: #D9D9D9;
        --gray: #7A7A7A;
        --outline: #2F3336;
        --retweet: #00C06B;
        --like: #E8265E;
        --wefinder: #764b96;
        --wefinder-dark-hover: #011017;
        --wefinder-light-hover: #8d4d9e;
    }
`;
