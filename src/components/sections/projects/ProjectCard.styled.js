import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 7fr;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11);
  margin: 1em 2em;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: #eff9f0;
  @media (max-width: 950px) {
    grid-template-columns: 4.5fr 7fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 600px) {
    margin: 1em 0;
  }
  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
      0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
      0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
    transition: all 150ms ease-in-out;
    .Content::before {
      ${"" /* opacity: 0.05; */}
      transition: all 150ms ease-in-out;
    }
    .ImageContainer::before {
      ${"" /* opacity: 0.05; */}
      transition: all 150ms ease-in-out;
    }
  }
`
export const Content = styled.div`
  background: #333640;
  padding: 4em 3em 2.25em 3em;
  position: relative;
  ${"" /* border-radius: 5px 0 0 5px; */}
  &:before {
    ${"" /* position: absolute; */}
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #5f7de7;
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }
  @media (max-width: 950px) {
    padding: 0.75em 1.5em;
  }
  @media (max-width: 768px) {
    grid-row: 2;
    ${"" /* border-radius: 0 0 5px 5px; */}
  }
`
export const Stack = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2em 0;
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
  margin-bottom: 5em;
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
  span {
    margin-left: 1.25em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
  &:hover {
    color: yellow;
    transition: all 150ms ease-in-out;
    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`
export const ImageContainer = styled.div`
  background: inherit;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  padding-left: 2em;
  padding-right: 2em;
  border: 1px solid #13070C;
  ${"" /* border-radius: 0 5px 5px 0; */}
  @media (max-width: 768px) {
    padding: 2em;
    max-height: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    ${"" /* border-radius: 5px 5px 0 0; */}
  }
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: black;
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }
  img {
    width: 100%;
    height: auto;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
    ${"" /* border-radius: 0 5px 5px 0; */}
    @media (max-width: 760px) {
      max-width: 300px;
      width: 100%;
      height: auto:
    }
  }
`
