import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --background: #0A111C;
    --primary: #07838C;

    --black: #0E131F;
    --white: #ffffff;
  }

  @media (max-width: 727px) {
    :root  {
      font-size: 55.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body { 
    background: var(--background);
    color: var(--white);
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1.6rem "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a { 
    color: inherit;
    text-decoration: none;
  }
`