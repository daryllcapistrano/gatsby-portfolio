import React from "react"
import Grid from "@material-ui/core/Grid"
import ProjectCard from "../projects/ProjectCard"

const Projects = () => {
  return (
    <section id="projects">
      <div
        style={{
          borderBottom: ` 1px solid`,
          marginBottom: `2em`,
        }}
      >
        <h3>
          <span style={{ fontWeight: `300` }}>[ 1 ]</span> Projects
        </h3>
      </div>
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
