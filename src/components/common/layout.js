import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "./theme"
import { Helmet } from "react-helmet"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import "./normalize.css"

const GlobalStyle = createGlobalStyle`
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

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
