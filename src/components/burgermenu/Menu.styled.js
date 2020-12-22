import styled from "styled-components"

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 5em 0em 5em 1em;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  border-right: 1px solid #13070c;
  a {
    font-size: 2em;
    text-transform: uppercase;
    padding: 1em 0 1em 0.25em;
    ${"" /* font-weight: bold; */}
    letter-spacing: 0.5rem;
    color: #13070c;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 576px) {
      font-size: 1.25rem;
    }
    &:hover {
      color: #5b66a6;
      ${"" /* border-left: 2px solid #5b66a6; */}
      font-weight: bold;
      transition: transform 0.3s ease-in-out;
    }
  }
`
