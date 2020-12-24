import React, { useEffect, useRef } from "react"
import { srConfig } from "../../../utils/config"
import sr from "../../../utils/sr"
import { Grid } from "@material-ui/core"
import ProjectCard from "./ProjectCard"
import { ProjectList } from "./Projects.data"
import { SectionWrapper, SectionHeader } from "./Projects.styled"

import { BiStats } from "react-icons/bi"

const Projects = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <SectionWrapper id="projects" className="load-hidden" ref={revealContainer}>
      <SectionHeader>
        <span style={{ marginRight: `1em` }}>
          <BiStats />
        </span>
        <span>What I've Been Working On</span>
      </SectionHeader>
      {/* <Grid container> */}
      {ProjectList.map((project, index, id) => (
        <Grid item xs={12} key={index}>
          <ProjectCard
            // stack={project.stack}
            title={project.title}
            description={project.description}
            detailLink={project.detailLink}
          />
        </Grid>
      ))}
      {/* </Grid> */}
      {/* </Container> */}
    </SectionWrapper>
  )
}

export default Projects
