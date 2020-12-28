import React, { useEffect, useRef } from "react"
import { srConfig } from "../../../utils/config"
import sr from "../../../utils/sr"
import { Grid } from "@material-ui/core"
// import ProjectCard from "./ProjectCard"
import Card from "../../card/Card"
import { ProjectList } from "./Projects.data"
import { SectionWrapper, SectionHeader } from "./Projects.styled"

import { BiStats } from "react-icons/bi"

const Projects = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <section id="projects" className="load-hidden" ref={revealContainer}>
      <SectionWrapper>
        <SectionHeader>
          <span>
            <BiStats />
          </span>
          <span>What I've Been Working On</span>
        </SectionHeader>
        <Grid container spacing={1}>
          {ProjectList.map((project, index, id) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                id={id}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
              />
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>
    </section>
  )
}

export default Projects
