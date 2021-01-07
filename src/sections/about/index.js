import React from "react"
import HeadShotImage from "../../components/images/HeadShotImage"
import {
  ImageWrapper,
  TextWrapper,
  SectionWrapper,
  SectionHeader,
} from "./style"

const AboutMe = () => {
  return (
    <section id="about">
      <SectionWrapper>
        <SectionHeader>
          <h3>About Me</h3>
        </SectionHeader>
        <TextWrapper>
          <p>
            I'm a <strong>self-taught</strong> developer with
            <strong> 4 years</strong> of experience. Currently living in
            <strong> Portland, Oregon</strong>, soon to be relocated to
            <strong> Las Vegas</strong>. I create websites and apps that are
            thoughtfully designed and built with performance and best practices
            in mind.
          </p>
          <ImageWrapper>
            <HeadShotImage />
          </ImageWrapper>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            eum accusantium totam sint a expedita temporibus repudiandae
            praesentium, repellat perferendis officia optio voluptatibus nam
            nemo quia error doloremque unde earum nesciunt delectus, at aliquam
            ad. Veniam quaerat quod praesentium animi nam debitis ex qui! Minus
            quam, modi omnis sapiente aliquid porro officia. Enim nostrum
            corrupti saepe iure rerum alias blanditiis praesentium corporis,
            sapiente eveniet recusandae nesciunt consequuntur similique
            doloribus repudiandae fugiat distinctio debitis autem expedita?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro
            repellat omnis dolorum voluptatem fuga eos laudantium, sit vel ea
            perferendis eligendi! Quod, sit totam.
          </p>
        </TextWrapper>
        {/* </Grid>
        </Grid> */}
      </SectionWrapper>
    </section>
  )
}

export default AboutMe
