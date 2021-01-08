import React from "react"
import PropTypes from "prop-types"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import { MdExpandMore } from "react-icons/md"

import UndrawSVG from "../../assets/svg/undraw_progressive_app_m9ms.svg"

import {
  Container,
  ContentWrapper,
  Title,
  Description,
  Action,
  TitleWrapper,
  TechList,
} from "./style"

export default function Card(props) {
  const [expanded, setExpanded] = React.useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Container>
      <TitleWrapper>
        <Title>{props.title}</Title>
        <IconButton
          onClick={handleExpandClick}
          size="medium"
          aria-label="show project screenshot"
          color="primary"
        >
          <MdExpandMore />
        </IconButton>
      </TitleWrapper>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div>
          <UndrawSVG />
        </div>
      </Collapse>
      <ContentWrapper>
        <TechList>javascript / nodeJS / gatsbyJS / mongoDB</TechList>
        <Description>{props.description}</Description>

        <Action
          href={props.githubLink}
          rel="noreferer noopener"
          target="_blank"
        >
          View On Github <span>&#8594;</span>
        </Action>
        {/* <Button href="/404" color="inherit" variant="outlined">
          view project
        </Button> */}
      </ContentWrapper>
    </Container>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // stack: PropTypes.array.isRequired,
  githubLink: PropTypes.string.isRequired,
}
