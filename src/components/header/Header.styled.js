import styled from "styled-components"

export const HeaderWrapper = styled.div`
  width: 100%;
  text-align: right;
  padding: 0 1.25em;
  ${"" /* hide on tablet size and below */}
  @media only screen and (max-width: 599px) {
    display: none;
  }
  ${"" /* below targets the navlinks */}
  button {
    color: #2d2e40;

    &:hover {
      color: #5b66a6;
      ${"" /* border-left: 2px solid #5b66a6; */}
      ${"" /* font-weight: bold; */}
      ${"" /* transition: transform 0.3s ease-in-out; */}
    }
  }
`
