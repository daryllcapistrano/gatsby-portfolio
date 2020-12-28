import React from "react"
import PropTypes from "prop-types"
// import { Button } from "@material-ui/core"
import Undraw from "../../../assets/svg/undraw_progressive_app_m9ms.svg"
import {
  Container,
  ContentWrapper,
  Title,
  Description,
  Action,
  ImageWrapper,
} from "./ProjectCard.styled"

const ProjectCard = props => (
  <Container>
    <ImageWrapper>
      <Undraw />
    </ImageWrapper>
    <ContentWrapper>
      <Title>{props.title}</Title>
      <div
        style={{
          marginBottom: `.8em`,
          opacity: `.2`,
          fontSize: `80%`,
          fontFamily: `monospace`,
        }}
      >
        javascript / nodeJS / gatsbyJS / mongoDB
      </div>
      <Description>{props.description}</Description>

      <Action href={props.githubLink} rel="noreferer noopener" target="_blank">
        View On Github <span>&#8594;</span>
      </Action>
      {/* <Button href="/404" color="inherit" variant="outlined">
          view project
        </Button> */}
    </ContentWrapper>
  </Container>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // stack: PropTypes.array.isRequired,
  githubLink: PropTypes.string.isRequired,
}
