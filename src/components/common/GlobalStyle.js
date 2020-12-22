import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle` 
  html, body {
    font-family: "Rubik", sans-serif;
    background-color: #2D2E40;
    color: #F25C05;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: scroll !important;
    scroll-behavior: smooth;
  }

  ${
    "" /* refactor below, currently only changes the down chevron color, try targeting only that element instead */
  }

  a {
    color: white;
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
// .Panorama-n°1-1-hex { color: #2D2E40; }
// .Panorama-n°1-2-hex { color: #5B66A6; }
// .Panorama-n°1-3-hex { color: #F27405; }
// .Panorama-n°1-4-hex { color: #F25C05; }
// .Panorama-n°1-5-hex { color: #F2C5BB; }

/* Color Theme Swatches in RGBA */
// .Panorama-n°1-1-rgba { color: rgba(45, 46, 63, 1); }
// .Panorama-n°1-2-rgba { color: rgba(91, 102, 165, 1); }
// .Panorama-n°1-3-rgba { color: rgba(242, 115, 4, 1); }
// .Panorama-n°1-4-rgba { color: rgba(242, 91, 4, 1); }
// .Panorama-n°1-5-rgba { color: rgba(242, 196, 186, 1); }
