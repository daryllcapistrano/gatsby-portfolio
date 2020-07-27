import React from "react"
import HeadShotImage from "../images/HeadShotImage"
import Grid from "@material-ui/core/Grid"

const AboutMe = () => {
  return (
    <section>
      <h3>About Me</h3>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <HeadShotImage />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            vero nemo obcaecati laborum itaque, ut tempore, sed, at quia dolore
            numquam nam exercitationem!
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default AboutMe
