import React from "react"
import Grid from "@material-ui/core/Grid"
import {
  SectionHeader,
  SectionNumber,
  SectionTitle,
} from "../common/SectionHeader"

const Contact = () => {
  return (
    <section id="contact" style={{ height: `100vh` }}>
      <SectionHeader>
        <SectionNumber>03.</SectionNumber>
        <SectionTitle>Get In Touch With Me</SectionTitle>
      </SectionHeader>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit
              dolorem pariatur iusto, animi saepe, itaque sequi rem nisi
              recusandae vel distinctio. Adipisci.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              perspiciatis repellendus quia id laboriosam earum nesciunt
              explicabo laudantium aperiam facere unde, aut dignissimos
              voluptates ratione, enim ex esse, inventore at asperiores.
            </p>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default Contact
