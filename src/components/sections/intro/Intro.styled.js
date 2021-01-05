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
  width: 90%;
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  @media only screen and (min-width: 960px) {
    width: 25%;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Name = styled.h1`
  font-family: "Corben", cursive;
  font-size: 2.75em;
  line-height: 1;
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 0;
`

export const Description = styled.p`
  text-align: center;
  margin: 0;
`

export const DownChevron = styled.div`
  position: absolute;
  bottom: 0;
`
