import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "../header/Header"
import "./normalize.css"

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #0e1111;
    color: #e5e5e5;
    max-width: 100%;
    overflow-x: hidden;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
