import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background:#f0f0f7;
    /* color: #fff; */
    -webkit-font-smoothing: antialiased;
  }
 
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }

body,
input,
button,
textarea {
  font: 500 1.6rem Poppins;
  color: var(--color-text-base);
  
}


  
`;