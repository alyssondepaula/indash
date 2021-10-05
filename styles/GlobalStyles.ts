import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, #root {
    height: 100%;
    width: 100%;
    background: var(--color-gray001);
  }

  body {
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
    width: 100%;
    background: var(--color-gray001);
  }

  :root {
    --color-sucess: #79C300;
    --color-danger: #D64B45;
    --color-primary: #0047BB;
    --color-secondary: #F06400;

    --color-white: #FFFFFF;
    --color-gray001: #F5F8FA;
    --color-gray002: #657786;
    --color-gray003: #14171A;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  text {
   font-family: 'Lato', sans-serif;
  }
`;