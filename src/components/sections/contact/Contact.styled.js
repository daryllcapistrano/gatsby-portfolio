import styled from "styled-components"

export const SectionWrapper = styled.section`
  padding: 1.5em;

  ul {
    text-align: center;
    padding: 0;
    margin: 0;

    li {
      display: inline-block;
      margin: 0 0.5em;

      a {
        font-size: 80%;
        text-decoration: none;
        color: inherit;
        padding-bottom: 0.25em;
        &:hover {
          border-bottom: 2px solid #191e24;
        }
      }
    }
  }
`

export const SectionHeader = styled.h3`
  display: flex;
  justify-content: flex-start;
  border-bottom: 2px solid #191e24;
`
