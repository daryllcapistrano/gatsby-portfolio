import styled from "styled-components"
import { Container, Button } from "@material-ui/core"

export const IntroWrapper = styled.section`
  height: 100vh;
  padding: 0 2.5em;
  background-color: #eff9f0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23fcd116' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%230038a8' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23fbb000' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%2341257e' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23f68e00' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23451758' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23ed6b0d' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%233b1038' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23df461c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23290e1f' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23ce1126' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%2313070c' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: 100% 100%;
  /* background by SVGBackgrounds.com */
  @media (min-width: 768px) {
    padding: 0 5em;
  }
  @media (min-width: 1024px) {
    padding: 0 10em;
  }
`

export const TextContainer = styled.div`
  position: absolute;
  top: 25vh;
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
  border: 2px solid #0038a8 !important;
  border-radius: 10px !important;
  color: #0038a8 !important;
  &:hover {
    border: 2px solid #0038a8 !important;
    color: white !important;
    background-color: #0038a8 !important;
    transition: color 0.4s linear;
    ${"" /* transform: scale(1.05);
    transition-duration: 0.3s;
    transition-property: transform; */}
  }
  &:focus {
    border: 2px solid #0038a8 !important;
    color: white !important;
    background-color: #0038a8 !important;
    transition: color 0.4s linear;
    ${"" /* transform: scale(1.05);
    transition-duration: 0.2s;
    transition-property: transform; */}
  }
`

export const CallToAction = styled(Container)`
  top: 90vh;
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 1.25em;
`
