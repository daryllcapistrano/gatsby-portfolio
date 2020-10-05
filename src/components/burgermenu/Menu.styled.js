import styled from "styled-components"

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #eff9f0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 60vw;
  text-align: left;
  padding: 5rem 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  border-right: 2px solid #13070c;
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #13070c;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: grey;
      ${"" /* change above to correct color value */}
    }
  }
`
