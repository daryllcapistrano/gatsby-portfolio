import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle` 
  body {
    font-family: "Rubik", sans-serif;
    background-color: #121212;
    color: #DCE0D9;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: scroll !important;
    scroll-behavior: smooth;
  }

  ${"" /* prevents flicker from scroll reveal animation */}
  html.sr .load-hidden {
    visibility: hidden;
  }

  #projects, #about {
    margin-bottom: 10em;
  }
`

/* Color Theme Swatches in Hex */
//  { color: #121212; }
//  { color: #0C1618; }
//  { color: #191E24; }
//  { color: #DCE0D9; }
//  { color: #B7FDFE; }

//! media breakpoints, find and add all, then standardize
// @media only screen and (min-width: 600px) {}
// @media only screen and (min-width: 960px) {}
