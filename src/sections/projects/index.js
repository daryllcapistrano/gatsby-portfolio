import React, { useEffect, useRef } from "react"
import { Grid } from "@material-ui/core"
import Card from "../../components/card"
import { ProjectList } from "./data"
import sr from "../../utils/scrollReveal/sr"
import { scrollRevealConfig } from "../../utils/scrollReveal/config"
import { BiStats } from "react-icons/bi"
import { SectionWrapper, SectionHeader } from "./style"

const Projects = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, scrollRevealConfig()), [])

  return (
    <section id="projects">
      <SectionWrapper>
        <SectionHeader>
          <span>
            <BiStats />
          </span>
          <span>works</span>
        </SectionHeader>
        <Grid container spacing={1} ref={revealContainer}>
          {ProjectList.map((project, index, id) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
