import React, { useEffect } from "react"
import { bool, func } from "prop-types"
import { BurgerButton } from "./style"

const Button = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false

  useEffect(() => {
    if (isExpanded) {
      document.body.style.position = "fixed"
    }
    return () => {
      document.body.style.position = ""
    }
  }, [isExpanded])

  return (
    <BurgerButton
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </BurgerButton>
  )
}

Button.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Button
