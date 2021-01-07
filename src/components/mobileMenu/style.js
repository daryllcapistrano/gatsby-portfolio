import styled from "styled-components"

export const HeaderWrapper = styled.div`
  width: 100%;
  text-align: right;
  @media only screen and (max-width: 599px) {
    display: none;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  a {
    color: #0f0a01;
    text-decoration: none;
    padding: 1em;
    &:hover {
      opacity: 0.3;
    }
  }
`
