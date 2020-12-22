import styled from "styled-components"
import { Button } from "@material-ui/core"

export const TextWrapper = styled.div`
  margin: 1em;
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
