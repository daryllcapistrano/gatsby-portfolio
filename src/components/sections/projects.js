import React from "react"
import Grid from "@material-ui/core/Grid"
import ProjectCard from "../projects/ProjectCard"

const Projects = () => {
  return (
    <section id="projects">
      <h3>Projects</h3>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} align="center">
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={4} align="center">
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={4} align="center">
          <ProjectCard />
        </Grid>
      </Grid>
    </section>
  )
}

export default Projects
