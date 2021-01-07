import React from "react"
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import { FaAngleDoubleDown } from "react-icons/fa"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import IconButton from "@material-ui/core/IconButton"
import "animate.css"
import { DownChevron } from "./style"

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} in={!trigger} timeout={300}>
      {children}
    </Slide>
  )
}

export default function Action(props) {
  return (
    <HideOnScroll {...props}>
      <DownChevron className="animate__animated animate__fadeInDown animate__delay-2s animate__repeat-2">
        <Link to="#about">
          <IconButton aria-label="scroll to introduction">
            <IconContext.Provider
              value={{ color: "black", title: "next section" }}
            >
              <FaAngleDoubleDown />
            </IconContext.Provider>
          </IconButton>
        </Link>
      </DownChevron>
    </HideOnScroll>
  )
}
