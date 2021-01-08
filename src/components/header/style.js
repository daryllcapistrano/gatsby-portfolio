import styled from "styled-components"

export const HeaderWrapper = styled.div`
  width: 100%;
  @media (max-width: 640px) {
    display: none;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 1em;
  a {
    color: #0f0a01;
    text-decoration: none;
    margin-right: 1em;
    &:hover {
      opacity: 0.3;
      border-bottom: 1px solid black;
    }
  }
`
