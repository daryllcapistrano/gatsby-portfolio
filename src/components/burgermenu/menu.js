import React from "react"
import { bool } from "prop-types"
import { StyledMenu } from "./Menu.styled"

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="#projects" tabIndex={tabIndex}>
        {/* <span aria-hidden="true">💁🏻‍♂️</span> */}
        Projects
      </a>
      <a href="#about" tabIndex={tabIndex}>
        {/* <span aria-hidden="true">💸</span> */}
        About Me
      </a>
      <a href="#contact" tabIndex={tabIndex}>
        {/* <span aria-hidden="true">📩</span> */}
        Contact
      </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
