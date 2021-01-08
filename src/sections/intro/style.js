import styled from "styled-components"

// move beloww to theme file
// const innerHeight = window.innerHeight

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  min-height: 600px;
  word-wrap: break-word;
  @media (min-width: 640px) {
    height: 95vh;
  }
`

export const TextContainer = styled.div`
  position: absolute;
  top: 15%;
  width: 85vw;
  @media (min-width: 375px) {
    width: 75vw;
  }
  @media (min-width: 425px) {
    width: 65vw;
  }
  @media (min-width: 600px) {
    width: 50vw;
  }

  @media (min-width: 768px) {
    width: 40vw;
  }

  @media (min-width: 1024px) {
    width: 30vw;
  }

  @media (min-width: 1280px) {
    width: 25vw;
  }
`

export const ImageWrapper = styled.div`
  position: absolute;
  z-index: -1000;
  display: flex;
  bottom: 0;
`

export const Name = styled.h1`
  font-family: "Corben", cursive;
  line-height: 1;
  font-size: 2.2em;
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 0;
  font-weight: 500;
`

export const Description = styled.p`
  text-align: center;
  margin: 0;
  font-weight: 500;
`
