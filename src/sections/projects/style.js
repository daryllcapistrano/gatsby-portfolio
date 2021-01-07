import styled from "styled-components"

export const SectionWrapper = styled.section`
  padding: 0 1.5em 2em;
  @media only screen and (min-width: 600px) {
    padding: 0 3em 2em;
  }
  @media only screen and (min-width: 960px) {
    padding: 0 6em 2em;
  }
`

export const SectionHeader = styled.div`
  font-family: "Corben", cursive;
  display: flex;
  padding: 1em 0;
  margin: 0 0 2em;
  text-transform: uppercase;
  justify-content: flex-start;
  border-bottom: 2px solid #0f0a01;
  span {
    margin-right: 1em;
  }
`
