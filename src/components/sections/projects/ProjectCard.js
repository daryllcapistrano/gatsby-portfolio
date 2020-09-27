import React from "react"
import Undraw from "../../../assets/svg/undraw_progressive_app_m9ms.svg"
import {
  Container,
  Content,
  Stack,
  Title,
  Description,
  Action,
  ImageContainer,
} from "./ProjectCard.styled"

const ProjectCard = props => (
  <Container to={props.detailLink}>
    <Content className="Content">
      <Stack>{props.stack}</Stack>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Action className="Action">
        Details <span>&#8594;</span>
      </Action>
    </Content>
    <ImageContainer className="ImageContainer">
      <Undraw />
    </ImageContainer>
  </Container>
)

export default ProjectCard

// ProjectCard.propTypes = {
//     category: PropTypes.array.isRequired,
//     thumbnail: PropTypes.object.isRequired,
//     title: PropTypes.array.isRequired,
//     description: PropTypes.array.isRequired,
//     uid: PropTypes.string.isRequired
// }
