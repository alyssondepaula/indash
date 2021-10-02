import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    background: var(--color-background);
  }

  :root {
    --color-primary: #0047BB;
    --color-secondary: #F06400;
    --color-background: #F5F8FA;
    --color-white: #FFFFFF;

    --color-gray003: #14171A;
  }
`;