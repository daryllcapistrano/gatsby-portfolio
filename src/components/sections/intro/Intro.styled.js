import styled from "styled-components"
import { Container } from "@material-ui/core"

export const IntroWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 90px);
  word-wrap: break-word;
`

export const TextContainer = styled.div`
  width: 80%;
`
// export const Salutation = styled.p`
//   letter-spacing: 2px;
// `
export const Name = styled.h1`
  font-size: 3em;
  margin-bottom: 0;
`
export const Title = styled.h2`
  font-weight: 300;
  letter-spacing: 4px;
  margin-bottom: 0;
`

export const Description = styled.p`
  font-weight: 200;
  margin-top: 0.33em;
  margin-bottom: 0;
`

export const CallToAction = styled(Container)`
  position: absolute;
  text-align: center;
  bottom: 50px;
`

// export const ButtonContainer = styled.div`
//   margin: 2.5em 0;
// `

// export const StyledButton = styled(Button)`
//   border: 2px solid #0038a8 !important;
//   border-radius: 10px !important;
//   color: #0038a8 !important;
//   &:hover {
//     border: 2px solid #0038a8 !important;
//     color: white !important;
//     background-color: #0038a8 !important;
//     transition: color 0.4s linear;
//     ${"" /* transform: scale(1.05);
//     transition-duration: 0.3s;
//     transition-property: transform; */}
//   }
//   &:focus {
//     border: 2px solid #0038a8 !important;
//     color: white !important;
//     background-color: #0038a8 !important;
//     transition: color 0.4s linear;
//     ${"" /* transform: scale(1.05);
//     transition-duration: 0.2s;
//     transition-property: transform; */}
//   }
// `
