import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #333;
    font-family: 'Roboto Mono', monospace;
    color: #fff;
  }

  a {
    color: #fff;
  }

  cavans {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
