import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 7fr;
  margin: 1em 0;
  text-decoration: none;
  color: #191e24;
  @media (max-width: 950px) {
    grid-template-columns: 4.5fr 7fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const TitleWrapper = styled.div`
  background: #191e24;
  padding: 1em;
  border-bottom: 1px solid #121212;
  border-radius: 1em 1em 0 0;

  @media only screen and (min-width: 769px) {
    border-bottom: 0;
    border-right: 1px solid #121212;
    border-radius: 1em 0 0 1em;
  }
`

export const ContentWrapper = styled.div`
  background: #191e24;
  color: #dce0d9;
  padding: 1em;
  border-radius: 0 0 1em 1em;
  @media only screen and (min-width: 769px) {
    border-radius: 0 1em 1em 0;
  }
`
export const Title = styled.h3`
  margin: 0;
  ${"" /* text-decoration: underline; */}
  color: white;
`

export const Description = styled.p`
  margin: 0 0 1em 0;
`

export const Action = styled.a`
  font-weight: 400;
  font-size: 0.7em;
  text-decoration: none;
  color: #dce0d9;
  opacity: 0.2;
  transition: all 150ms ease-in-out;
  ${"" /* float: right; */}
  span {
    margin-left: 1.25em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
  &:hover {
    transition: all 150ms ease-in-out;
    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`

// export const Stack = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   margin: 1.5em 0;
//   width: 100%;
//   font-size: 1.25em;
//   color: inherit;
// `
