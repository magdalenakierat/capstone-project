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
    --primary-color-light: rgba(109, 129, 254, 0.15);
    --secondary-color: #ff9575;
    --text-color: #23314c;
    --text-color-light: rgba(34, 49, 76, 0.5);
    --body-background-color: #f6f7fc;
    --background-color-light: #fff;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    background-color: var(--body-background-color);
    color: var(--text-color);
  }

  h1 {
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-weight: 600;
    margin: 1rem 0 2rem 0;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
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
