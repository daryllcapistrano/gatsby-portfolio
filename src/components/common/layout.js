import React from "react"
import { Helmet } from "react-helmet"
// import { ThemeProvider } from "styled-components"
// import { GlobalStyle, theme } from "./GlobalStyle"
import { GlobalStyle } from "./GlobalStyle"
import Header from "../header"
import Footer from "../footer"
import "./normalize.css"

const Layout = ({ children }) => {
  return (
    // <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nobile:wght@400;500&family=Corben:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
    // </ThemeProvider>
  )
}

export default Layout
