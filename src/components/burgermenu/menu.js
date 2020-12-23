import React from "react"
import { bool, func } from "prop-types"
import { StyledMenu } from "./Menu.styled"

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="#projects" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
        {/* <span aria-hidden="true">💁🏻‍♂️</span> */}
        Projects
      </a>
      <a href="#about" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
        {/* <span aria-hidden="true">💸</span> */}
        About Me
      </a>
      <a href="#contact" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
        {/* <span aria-hidden="true">📩</span> */}
        Contact
      </a>

      <ul>
        <li>
          {" "}
          <a
            href="#projects"
            tabIndex={tabIndex}
            onClick={() => setOpen(!open)}
          >
            {/* <span aria-hidden="true">💁🏻‍♂️</span> */}
            Projects
          </a>
        </li>
        <li>
          <a href="#about" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
            {/* <span aria-hidden="true">💸</span> */}
            About Me
          </a>
        </li>
        <li>
          <a href="#contact" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
            {/* <span aria-hidden="true">📩</span> */}
            Contact
          </a>
        </li>
      </ul>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Menu
