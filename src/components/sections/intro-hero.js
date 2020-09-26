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
        <p style={{ letterSpacing: `2px` }}>Hi, my name is</p>
        <strong style={{ fontSize: `2em` }}> Daryll Capistrano.</strong>
        <h5>I'm a full stack developer</h5>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          cumque sint, magni amet minus voluptatibus excepturi repellendus
          aliquid! Iste culpa sapiente odio soluta odit tempore.
        </small>
        <div style={{ margin: `2.5em 0` }}>
          <button>contact me</button>
        </div>
      </TextContainer>
    </section>
  )
}

export default IntroHero
