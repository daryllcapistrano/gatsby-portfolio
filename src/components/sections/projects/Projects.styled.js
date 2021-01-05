import styled from "styled-components"

export const SectionWrapper = styled.section`
  padding: 1.5em;
  @media only screen and (min-width: 600px) {
    padding: 2em;
  }
  @media only screen and (min-width: 960px) {
    padding: 2.5em;
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

// export const ImageWrapper = styled.div`
//   padding: 1.25em;
// `

// export const TextWrapper = styled.div`
//   text-align: justify;
//   line-height: 1.5em;
// `
