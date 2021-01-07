import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${"" /* height: calc(100vh - 90px); */}
  height: 100vh;
  word-wrap: break-word;
`

export const TextContainer = styled.div`
  width: 100%;
  margin-bottom: 6em;
  /* @media only screen and (min-width: 425px) {
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    width: 60%;
  }
  @media only screen and (min-width: 1440px) {
    width: 50%;
  }
  @media only screen and (min-width: 2560px) {
    width: 25%;
  } */
`

export const ImageWrapper = styled.div`
  position: absolute;
  z-index: -1000;
  display: flex;
  bottom: -50px;
  /* justify-content: center; */
  /* top: 7em; */
  /* right: 0.8em; */
  /* @media only screen and (min-width: 320px) {
    top: 3em;
    right: -0.5em;
  }
  @media only screen and (min-width: 375px) {
    top: 3em;
    right: -0.5em;
  }
  @media only screen and (min-width: 425px) {
    top: 3em;
    right: 2.5em;
  }
  @media only screen and (min-width: 600px) {
    top: 3em;
    right: 1.5em;
  }
  @media only screen and (min-width: 960px) {
  }
  @media only screen and (min-width: 1024px) {
  } */
`

export const Name = styled.p`
  font-family: "Corben", cursive;
  line-height: 1;
  font-size: 2.5em;
  padding-left: 1em;
  /* @media only screen and (min-width: 320px) {
    font-size: 2.33em;
  }
  @media only screen and (min-width: 375px) {
    font-size: 2.75em;
  }
  @media only screen and (min-width: 425px) {
    font-size: 3em;
    margin-left: 0.25em;
  }
  @media only screen and (min-width: 600px) {
    font-size: 2.5em;
    margin-left: 2em;
  }
  @media only screen and (min-width: 960px) {
    font-size: 2.5em;
    margin-left: 2em;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 3.5em;
    margin-left: 1.75em;
  } */
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 0;
`

export const Description = styled.p`
  text-align: center;
  margin: 0;
`

// export const DownChevron = styled.div`
//   position: absolute;
//   bottom: 0;
// `
