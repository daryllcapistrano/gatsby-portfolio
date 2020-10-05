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
          <SectionTitle>Things I've Built</SectionTitle>
        </SectionHeader>
        <Grid container>
          <Grid item xs={12}>
            <ProjectCard
              stack={ProjectList.first.stack}
              title={ProjectList.first.title}
              description={ProjectList.first.description}
              detailLink={ProjectList.first.detailLink}
            />
          </Grid>
          <Grid item xs={12}>
            <ProjectCard
              stack={ProjectList.second.stack}
              title={ProjectList.second.title}
              description={ProjectList.second.description}
              detailLink={ProjectList.second.detailLink}
            />
          </Grid>
          <Grid item xs={12}>
            <ProjectCard
              stack={ProjectList.third.stack}
              title={ProjectList.third.title}
              description={ProjectList.third.description}
              detailLink={ProjectList.third.detailLink}
            />
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  )
}

export default Projects
