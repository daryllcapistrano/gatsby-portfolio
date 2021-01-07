import styled from "styled-components"

export const Container = styled.div`
  display: grid;
`

export const TitleWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  background: #191e24;
  padding: 1em;
  border-bottom: 1px solid #121212;
  border-radius: 1em 1em 0 0;
`

export const ContentWrapper = styled.div`
  background: #191e24;
  color: white;
  padding: 1em;
  border-radius: 0 0 1em 1em;
`
export const Title = styled.h3`
  margin: 0;
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
  opacity: 0.4;
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
