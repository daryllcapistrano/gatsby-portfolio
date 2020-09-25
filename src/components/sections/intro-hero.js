import React from "react"
import styled from "styled-components"

const TextContainer = styled.div`
  position: absolute;
  top: 25vh;
  color: white;
  margin: 0 1em 0 0;
`

const IntroHero = () => {
  return (
    <section style={{ height: `100vh` }}>
      <TextContainer>
        <p>Hi, my name is</p>
        <strong> Daryll Capistrano.</strong>
        <h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora vel
          atque ex quam assumenda reiciendis.
        </h5>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          cumque sint, magni amet minus voluptatibus excepturi repellendus
          aliquid! Iste culpa sapiente odio soluta odit tempore.
        </small>
        <div>
          <button>contact me</button>
        </div>
      </TextContainer>
    </section>
  )
}

export default IntroHero
