import styled from "styled-components"

export const HeaderWrapper = styled.div`
  width: 100%;
  text-align: right;
  padding: 0 1.25em;

  ${"" /* hide on tablet size and below */}
  @media only screen and (max-width: 599px) {
    display: none;
  }
`
