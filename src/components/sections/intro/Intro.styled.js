import styled from "styled-components"
import { Container, Button } from "@material-ui/core"

export const IntroWrapper = styled.section`
  height: 100vh;
  padding: 0 2.5em;
`

export const TextContainer = styled.div`
  position: absolute;
  top: 33vh;
  color: #13070c;
  margin: 0 1em 0 0;
`
export const Salutation = styled.p`
  letter-spacing: 2px;
`
export const Name = styled.strong`
  font-size: 2em;
`
export const Title = styled.h5`
  font-weight: 300;
  letter-spacing: 4px;
`

export const Description = styled.p`
  font-weight: 200;
`

export const ButtonContainer = styled.div`
  margin: 2.5em 0;
`

export const StyledButton = styled(Button)`
  border: 2px solid #3f51b5 !important;
  border-radius: 30px !important;
  color: #3f51b5 !important;
  &:hover {
    border: 2px solid #3f51b5 !important;
    color: white !important;
    background-color: #3f51b5 !important;
    transform: scale(1.05);
    transition-duration: 0.3s;
    transition-property: transform;
  }
  &:focus {
    border: 2px solid #3f51b5 !important;
    color: white !important;
    background-color: #3f51b5 !important;
    transform: scale(1.05);
    transition-duration: 0.2s;
    transition-property: transform;
  }
`

export const CallToAction = styled(Container)`
  top: 90vh;
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 1.25em;
`
