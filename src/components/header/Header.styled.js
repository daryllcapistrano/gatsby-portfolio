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
  float: right;
  a {
    color: #dce0d9;
    text-decoration: none;
    margin-right: 1em;
    padding: 1em;
    &:hover {
      opacity: 0.3;
      border-bottom: 1px solid white;
    }
  }
`
