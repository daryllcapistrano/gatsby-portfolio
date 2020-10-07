import React, { useEffect, useRef } from "react"
import { srConfig } from "../../../config"
import sr from "../../../utils/sr"
import { Container, Grid } from "@material-ui/core"
import ProjectCard from "./ProjectCard"
import { ProjectList } from "./Projects.data"
import {
  SectionWrapper,
  SectionHeader,
  SectionNumber,
  SectionTitle,
} from "../Section.styled"

const Projects = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <SectionWrapper id="projects">
      <Container className="load-hidden" ref={revealContainer}>
        <SectionHeader>
          <SectionNumber>01.</SectionNumber>
          <SectionTitle>Featured Projects</SectionTitle>
        </SectionHeader>
        <Grid container>
          {ProjectList.map((project, index) => (
            <Grid item xs={12} key={index}>
              <ProjectCard
                stack={project.stack}
                title={project.title}
                description={project.description}
                detailLink={project.detailLink}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  )
}

export default Projects
