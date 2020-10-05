import React from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "./GlobalStyle"
import Header from "../header"
import Footer from "../footer"
import "./normalize.css"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
          {/* <script src="https://unpkg.com/scrollreveal"></script> */}
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
