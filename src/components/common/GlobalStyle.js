import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle` 
  html, body {
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

`
export const theme = {
  primaryDark: "yellow",
  primaryLight: "yellow",
  primaryHover: "#F25C05",
  mobile: "576px",
}

/* Color Theme Swatches in Hex */
// .Panorama-n°1-1-hex { color: #121212; }
// .Panorama-n°1-2-hex { color: #0C1618; }
// .Panorama-n°1-3-hex { color: #191E24; }
// .Panorama-n°1-4-hex { color: #DCE0D9; }
// .Panorama-n°1-5-hex { color: #B7FDFE; }

/* Color Theme Swatches in RGBA */
// .Panorama-n°1-1-rgba { color: rgba(45, 46, 63, 1); }
// .Panorama-n°1-2-rgba { color: rgba(91, 102, 165, 1); }
// .Panorama-n°1-3-rgba { color: rgba(242, 115, 4, 1); }
// .Panorama-n°1-4-rgba { color: rgba(242, 91, 4, 1); }
// .Panorama-n°1-5-rgba { color: rgba(242, 196, 186, 1); }
