import styled from "styled-components"

export const SectionWrapper = styled.section`
  padding: 0 1.75em 2em;
  @media (min-width: 640px) {
    padding: 0 4.5em 2em;
  }

  @media (min-width: 768px) {
    padding: 2em 8.5em;
  }

  @media (min-width: 1024px) {
    padding: 2em 14em 0;
  }

  @media (min-width: 1280px) {
    padding: 2em 18em 0;
  }
`

export const SectionHeader = styled.div`
  font-family: "Corben", cursive;
  display: flex;
  /* padding: 1em 0; */
  margin-bottom: 2em;
  text-transform: uppercase;
  justify-content: flex-start;
  border-bottom: 1px solid #0f0a01;
`
