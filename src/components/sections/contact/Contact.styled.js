import styled from "styled-components"
import { Button } from "@material-ui/core"

export const SectionWrapper = styled.section`
  padding: 1.5em;
`

export const SectionHeader = styled.h3`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0;
`

export const SocialButton = styled(Button)`
  font-weight: 400;
  font-size: 1.25em;
  text-decoration: none;
  color: black;
  background-color: none;
  margin: 1em;
  }
  &:hover {
    color: inherit;
    background-color: none;    
  }
`
