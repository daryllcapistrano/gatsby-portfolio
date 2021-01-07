import React from "react"
import { Link } from "gatsby"
import { bool, func } from "prop-types"
import { MobileMenu, MobileLinkWrapper } from "./style"

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <MobileMenu open={open} aria-hidden={!isHidden} {...props}>
      <MobileLinkWrapper>
        <div>
          <Link to="#about" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
            {/* <span aria-hidden="true">💸</span> */}
            About
          </Link>
        </div>
        <div>
          <Link
            to="#projects"
            tabIndex={tabIndex}
            onClick={() => setOpen(!open)}
          >
            {/* <span aria-hidden="true">💁🏻‍♂️</span> */}
            Works
          </Link>
        </div>
        <div>
          <Link
            to="#contact"
            tabIndex={tabIndex}
            onClick={() => setOpen(!open)}
          >
            {/* <span aria-hidden="true">📩</span> */}
            Contact
          </Link>
        </div>
      </MobileLinkWrapper>
    </MobileMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Menu
