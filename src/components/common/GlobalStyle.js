import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle` 
  html, body {
    font-family: "Rubik", sans-serif;
    background-color: #EFF9F0;
    color: #13070C;
    max-width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  a {
    color: #13070C;
  }

  ${"" /* prevents flicker from scroll reveal animation */}
  html.sr .load-hidden {
    visibility: hidden;
  }

`
export const theme = {
  primaryDark: "#13070C",
  primaryLight: "#EFF9F0",
  primaryHover: "#CBA328",
  mobile: "576px",
}
