import React from "react"
import PropTypes from "prop-types"
import { Button } from "@material-ui/core"
import Undraw from "../../../assets/svg/undraw_progressive_app_m9ms.svg"
import {
  Container,
  Content,
  Title,
  Description,
  Action,
  ImageContainer,
} from "./ProjectCard.styled"

const ProjectCard = props => (
  <Container>
    <ImageContainer className="ImageContainer">
      <Undraw />
    </ImageContainer>
    <Content className="Content">
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Action
        className="Action"
        href={props.detailLink}
        rel="noreferer noopener"
        target="_blank"
      >
        View On Github <span>&#8594;</span>
      </Action>
      <Button
        href="/404"
        color="primary"
        variant="outlined"
        style={{ width: `100%`, marginBottom: `2em` }}
      >
        view project
      </Button>
    </Content>
    {/* <ImageContainer className="ImageContainer">
      <Undraw />
    </ImageContainer> */}
  </Container>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // stack: PropTypes.array.isRequired,
  detailLink: PropTypes.string.isRequired,
}
