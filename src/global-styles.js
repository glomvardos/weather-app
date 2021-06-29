import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;500;600;700&display=swap');
  
  * {
    padding: 0;
    margin:0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background-color: #100e1d;
    font-family: 'Raleway', sans-serif;
    color: #E7E7EB;
  }

  p {
    color: #88869D;
  }

  @media(min-width: 1440px) {
    body {
      overflow: hidden;
    }
    
    #root {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr 2fr;
    } 
  }
`
export default GlobalStyles
