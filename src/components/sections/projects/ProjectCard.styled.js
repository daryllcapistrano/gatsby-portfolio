import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 7fr;
  margin: 1em 0;
  text-decoration: none;
  color: #dce0d9;
  @media (max-width: 950px) {
    grid-template-columns: 4.5fr 7fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Content = styled.div`
  background: #202022;
  padding-top:6em;
  ${"" /* padding: 1em 1.5em; */}
  position: relative;
  }
  @media (max-width: 768px) {
    grid-row: 2;
  }
`
export const Stack = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1.5em 0;
  width: 100%;
  font-size: 1.25em;
  color: inherit;
`
export const Title = styled.h2`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`
export const Description = styled.div`
  font-size: 1em;
  font-weight: 300;
  line-height: 1.5em;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 2.5em;
  @media (max-width: 768px) {
    margin-bottom: 2.5em;
  }
`
export const Action = styled.a`
  font-weight: 400;
  font-size: 0.7em;
  text-decoration: none;
  color: #ddf8e8;
  transition: all 150ms ease-in-out;
  float: right;
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
export const ImageContainer = styled.div`
  background: white;
  padding: 2em;
`
