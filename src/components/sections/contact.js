import React from "react"
import Grid from "@material-ui/core/Grid"

const Contact = () => {
  return (
    <section id="contact" style={{ height: `100vh` }}>
      <div
        style={{
          borderBottom: ` 1px solid`,
          marginBottom: `2em`,
        }}
      >
        <h3>[ 3 ] Contact</h3>
      </div>
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
