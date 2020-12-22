import React from "react"
import PropTypes from "prop-types"
import { Button } from "@material-ui/core"
// import Undraw from "../../../assets/svg/undraw_progressive_app_m9ms.svg"
import {
  Container,
  Content,
  // Stack,
  Title,
  Description,
  Action,
  ImageContainer,
} from "./ProjectCard.styled"

const ProjectCard = props => (
  <Container>
    <Content className="Content">
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      {/* <Stack>{props.stack}</Stack> */}
      <Button
        href="/404"
        color="primary"
        variant="outlined"
        style={{ width: `100%`, marginBottom: `2em` }}
      >
        view project
      </Button>
      <Action
        className="Action"
        href={props.detailLink}
        rel="noreferer noopener"
        target="_blank"
      >
        View On Github <span>&#8594;</span>
      </Action>
    </Content>
    <ImageContainer className="ImageContainer">
      {/* <Undraw /> */}
    </ImageContainer>
  </Container>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // stack: PropTypes.array.isRequired,
  detailLink: PropTypes.string.isRequired,
}
