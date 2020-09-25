import React from "react"
import Grid from "@material-ui/core/Grid"
import ProjectCard from "../projects/ProjectCard"

const Projects = () => {
  return (
    <section id="projects">
      <h3>Projects</h3>
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
    </section>
  )
}

export default Projects
