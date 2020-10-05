import React, { useEffect } from "react"
import { bool, func } from "prop-types"
import { StyledBurger } from "./Burger.styled"

const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false

  useEffect(() => {
    if (isExpanded) {
      document.body.style.position = "fixed"
      // document.body.style.paddingRight = "15px"
    }
    return () => {
      document.body.style.position = ""
      // document.body.style.paddingRight = "0px"
    }
  }, [isExpanded])

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger
