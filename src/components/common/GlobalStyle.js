import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: "Rubik", sans-serif;
    background-color: #091540;
    color: #DDF8E8;
    max-width: 100%;
    overflow-x: hidden;
    margin: 0 1em;
    scroll-behavior: smooth;

  }
`
export const theme = {
  primaryDark: "#0D0C1D",
  primaryLight: "#EFFFFA",
  primaryHover: "#343078",
  mobile: "576px",
}