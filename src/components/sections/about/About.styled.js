import styled from "styled-components"

export const SectionWrapper = styled.section`
  padding: 1.5em;
  background-color: #ffffff;
  @media only screen and (min-width: 600px) {
    padding: 3em;
  }
  @media only screen and (min-width: 960px) {
    padding: 6em;
  }
`

export const SectionHeader = styled.h3`
  display: flex;
  justify-content: flex-start;
  border-bottom: 2px solid #191e24;

  span {
    margin-right: 1em;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 1em;
  @media only screen and (min-width: 600px) {
    float: left;
    width: 12em;
    height: auto;
    margin: 0 1em 1em 0;
  }
  @media only screen and (min-width: 960px) {
  }
`

export const TextWrapper = styled.div`
  text-align: justify;
  line-height: 1.5em;
  white-space: break-spaces;
  p {
    margin-bottom: 0;
  }
`
