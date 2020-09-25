import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import { RichText } from "prismic-reactjs";
// import styled from "@emotion/styled";
// import dimensions from "styles/dimensions";
// import colors from "styles/colors";
// import PropTypes from "prop-types";

const ProjectCardContainer = styled(Link)`
  display: grid;
  grid-template-columns: 4fr 7fr;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  margin: 1em 2em;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: black;
  @media (max-width: 950px) {
    grid-template-columns: 4.5fr 7fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 600px) {
    margin: 0.5em 1em;
  }
  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;
    .ProjectCardAction {
      color: black;
      transition: all 150ms ease-in-out;
      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }
    .ProjectCardContent::before {
      opacity: 0.02;
      transition: all 150ms ease-in-out;
    }
    .ProjectCardImageContainer::before {
      opacity: 0.2;
      transition: all 150ms ease-in-out;
    }
  }
`

const ProjectCardContent = styled.div`
  background: white;
  padding: 4em 3em 2.25em 3em;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: black;
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }
  @media (max-width: 950px) {
    padding: 3.25em 2.5em 2em 2.5em;
  }
  @media (max-width: 768px) {
    grid-row: 2;
  }
`

const ProjectCardCategory = styled.h6`
  font-weight: 600;
  color: grey;
`

const ProjectCardTitle = styled.h3`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`

const ProjectCardBlurb = styled.div`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 5em;
  @media (max-width: 768px) {
    margin-bottom: 2.5em;
  }
`

const ProjectCardAction = styled.div`
  font-weight: 600;
  text-decoration: none;
  color: black;
  transition: all 150ms ease-in-out;
  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
`

const ProjectCardImageContainer = styled.div`
  background: lightgrey;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  padding-left: 2em;
  padding-right: 2em;
  @media (max-width: 760px) {
    padding-top: 3em;
    max-height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: black;
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }
  img {
    max-width: 400px;
    width: 100%;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
    @media (max-width: 760px) {
      max-width: 300px;
    }
  }
`

const ProjectCard = () => (
  <ProjectCardContainer to={`#projects`}>
    <ProjectCardContent className="ProjectCardContent">
      <ProjectCardCategory>category</ProjectCardCategory>
      <ProjectCardTitle>title</ProjectCardTitle>
      <ProjectCardBlurb>rich text</ProjectCardBlurb>
      <ProjectCardAction className="ProjectCardAction">
        Details <span>&#8594;</span>
      </ProjectCardAction>
    </ProjectCardContent>
    <ProjectCardImageContainer className="ProjectCardImageContainer">
      image here
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
