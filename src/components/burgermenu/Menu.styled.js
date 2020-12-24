import styled from "styled-components"

export const MobileMenu = styled.nav`
  position: absolute;
  background-color: #121212;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0px;
  transition: transform 0.3s ease-in-out;
  word-break: break-word;
`

export const MobileLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  div {
    padding: 1em 3.5em;
  }
  a {
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    color: inherit;
    text-decoration: none;
  }
`
