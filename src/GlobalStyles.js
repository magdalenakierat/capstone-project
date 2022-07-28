import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    background-color: #fafafa;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 2rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
