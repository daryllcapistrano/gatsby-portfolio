import React from "react"
import Undraw from "../../assets/svg/undraw_progressive_app_m9ms.svg"
import {
  ProjectCardContainer,
  ProjectCardContent,
  ProjectCardCategory,
  ProjectCardTitle,
  ProjectCardBlurb,
  ProjectCardAction,
  ProjectCardImageContainer,
} from "./ProjectCard.styled"

const ProjectCard = () => (
  <ProjectCardContainer to={`#projects`}>
    <ProjectCardContent className="ProjectCardContent">
      <ProjectCardCategory>category</ProjectCardCategory>
      <ProjectCardTitle>title</ProjectCardTitle>
      <ProjectCardBlurb>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime
        quibusdam dicta, et dolorum facere quisquam!
      </ProjectCardBlurb>
      <ProjectCardAction className="ProjectCardAction">
        Details <span>&#8594;</span>
      </ProjectCardAction>
    </ProjectCardContent>
    <ProjectCardImageContainer className="ProjectCardImageContainer">
      <Undraw />
    </ProjectCardImageContainer>
  </ProjectCardContainer>
)

export default ProjectCard

// ProjectCard.propTypes = {
//     category: PropTypes.array.isRequired,
//     thumbnail: PropTypes.object.isRequired,
//     title: PropTypes.array.isRequired,
//     description: PropTypes.array.isRequired,
//     uid: PropTypes.string.isRequired
// }
