import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --primary-color: #6d81fe;
    --secondary-color: #ff9575;
    --text-color: #23314c;
    --body-background-color: #f6f7fc;
    --background-color-light: #fff;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    background-color: var(--body-background-color);
    color: var(--text-color);
  }

  h2 {
    font-size: 1.25rem;
    line-height: 2rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
