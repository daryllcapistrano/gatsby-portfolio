import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import "./normalize.css"

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #ffffff;
    color: #000000;
    max-width: 100%;
    overflow-x: hidden;
    margin: 0;
    scroll-behavior: smooth;

  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
