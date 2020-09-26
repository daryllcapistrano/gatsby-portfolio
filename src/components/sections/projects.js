import React from "react"
import Grid from "@material-ui/core/Grid"
import ProjectCard from "../projects/ProjectCard"
import {
  SectionWrapper,
  SectionHeader,
  SectionNumber,
  SectionTitle,
} from "./styles/SectionHeader"

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <SectionHeader>
        <SectionNumber>01.</SectionNumber>
        <SectionTitle>Things I've Built</SectionTitle>
      </SectionHeader>
      <Grid container>
        <Grid item xs={12}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12}>
          <ProjectCard />
        </Grid>
      </Grid>
    </SectionWrapper>
  )
}

export default Projects
