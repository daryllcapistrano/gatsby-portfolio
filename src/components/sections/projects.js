import React from "react"
import Grid from "@material-ui/core/Grid"

const Projects = () => {
  return (
    <section>
      <h3>Projects</h3>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} align="center">
          <img
            src="https://picsum.photos/300/400?random=1"
            alt="lorem picsum 1"
          />
        </Grid>
        <Grid item xs={12} sm={4} align="center">
          <img
            src="https://picsum.photos/300/400?random=2"
            alt="lorem picsum 2"
          />
        </Grid>
        <Grid item xs={12} sm={4} align="center">
          <img
            src="https://picsum.photos/300/400?random=3"
            alt="lorem picsum 3"
          />
        </Grid>
      </Grid>
    </section>
  )
}

export default Projects
